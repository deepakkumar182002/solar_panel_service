import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "नमस्ते! मैं Ecosun Energy Solutions का Solar Energy Assistant हूं। मैं आपकी solar energy से related सभी queries में help कर सकता हूं।\n\nआप मुझसे पूछ सकते हैं:\n• Solar installation cost\n• Savings calculator\n• Maintenance info\n• Government subsidies\n• Installation process\n\nकैसे मदद कर सकता हूं?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await getOpenAIResponse(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting OpenAI response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "माफ करें, मुझे अभी कुछ technical issue आ रहा है। कृपया थोड़ी देर बाद try करें या direct हमसे contact करें। \n\nमैं फिर भी basic questions का जवाब दे सकता हूं!",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getOpenAIResponse = async (input: string): Promise<string> => {
    try {
      // Use Vercel API endpoint or fallback to local for development
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/chat' 
        : `${window.location.origin}/api/chat`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.message) {
        return data.message.trim();
      } else {
        throw new Error('Invalid response format from API');
      }
    } catch (error) {
      console.error('OpenAI Request Error:', error);
      
      // Fallback to FAQ-based responses if OpenAI fails
      const lowerInput = input.toLowerCase();
      
      // System costs
      if (lowerInput.includes("cost") || lowerInput.includes("price") || lowerInput.includes("कीमत") || lowerInput.includes("खर्च")) {
        return "सोलर सिस्टम की कीमत:\n• 1kW: ₹65k–₹80k\n• 2kW: ₹1.2L–₹1.6L\n• 3kW: ₹1.8L–₹2.1L\n• 5kW: ₹2.9L–₹3.1L\n• 10kW: ₹5.6L–₹5.8L\n\nRate: ₹55–₹70 per watt\n\nAccurate quote के लिए हमसे संपर्क करें!";
      }
      
      // Subsidy
      if (lowerInput.includes("subsidy") || lowerInput.includes("सब्सिडी") || lowerInput.includes("yojana") || lowerInput.includes("योजना")) {
        return "सरकारी सब्सिडी (PM Surya Ghar Yojana):\n• 1-2kW: ₹90,000 तक\n• 3kW और अधिक: ₹1,08,000 तक\n\nसब्सिडी मिलने का समय: 3 महीने\nआवेदन: https://pmsuryaghar.gov.in\n\nसिर्फ residential consumers के लिए MNRE-approved vendors के through।";
      }
      
      // Savings
      if (lowerInput.includes("saving") || lowerInput.includes("बचत") || lowerInput.includes("save")) {
        return "मासिक बचत:\n• 1kW: ₹700–₹850/month\n• 5kW: ₹3,500–₹4,000/month\n\nPayback Period: 1.5–3 years\n\nSolar Calculator से अपनी exact savings calculate करें!";
      }
      
      // Maintenance
      if (lowerInput.includes("maintenance") || lowerInput.includes("रखरखाव") || lowerInput.includes("clean")) {
        return "रखरखाव बहुत आसान है:\n• हर 10-15 दिन में panels clean करें\n• Annual check-up recommended\n\nवारंटी:\n• Panels: 25 साल\n• Inverter: 5-10 साल\n• Installation: 1 साल";
      }
      
      // Installation & Time
      if (lowerInput.includes("install") || lowerInput.includes("time") || lowerInput.includes("समय") || lowerInput.includes("apply")) {
        return "Installation 2-5 दिन में पूरी हो जाती है।\n\nApply करें: https://pmsuryaghar.gov.in\n\nRoof space needed: 100 sq. ft. per kW\n\nहमारी expert team सभी permits और grid connection handle करती है!";
      }
      
      // System Types
      if (lowerInput.includes("type") || lowerInput.includes("प्रकार") || lowerInput.includes("kinds")) {
        return "तीन मुख्य प्रकार:\n1. On-Grid: Grid से connected, net metering\n2. Off-Grid: Battery backup के साथ\n3. Hybrid: Grid + Battery दोनों\n\nNet Metering: Excess energy के लिए credit मिलता है।";
      }
      
      // Power Generation
      if (lowerInput.includes("generat") || lowerInput.includes("power") || lowerInput.includes("unit") || lowerInput.includes("बिजली")) {
        return "Power Generation:\n• 4-5 units/day प्रति kW\n• Average sunlight conditions में\n\nBattery backup available:\n• Lithium batteries\n• Lead-acid batteries\n\nHybrid या Off-Grid systems में।";
      }
      
      // Contact
      if (lowerInput.includes("contact") || lowerInput.includes("संपर्क") || lowerInput.includes("call") || lowerInput.includes("phone")) {
        return "संपर्क करें:\n📞 +91 8218011747\n🌐 ecosunenergysolutions.in\n\nFree consultation के लिए आज ही call करें!\n\nहमारी services:\n✓ Residential Solar\n✓ Commercial Solar\n✓ Industrial Solar Plants\n✓ Maintenance & Support";
      }
      
      return "मैं आपकी solar energy से related सभी queries में help कर सकता हूं!\n\n• System costs & types\n• Government subsidy\n• Monthly savings\n• Installation process\n• Maintenance\n• Net metering\n\nकोई specific question पूछें या +91 8218011747 पर call करें।";
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="icon"
            className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border w-14 h-14 rounded-full shadow-xl bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 animate-bounce"}
            onClick={() => {
              setIsOpen(true);
            }}
            data-testid="button-chatbot-open"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </div>
      )}

      {isOpen && (
        <Card
          className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border border-border/50 bg-background/95 backdrop-blur-md"
          data-testid="card-chatbot"
        >
          <CardHeader className="flex flex-row items-center justify-between py-3 px-4 border-b border-border/50 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Solar Energy Assistant</CardTitle>
                <p className="text-xs opacity-90">AI-powered help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsOpen(false);
              }}
              className="hover:bg-white/20 text-white h-8 w-8"
              data-testid="button-chatbot-close"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1 px-4 py-4 h-full max-h-[350px] overflow-y-auto">
              <div className="space-y-3 min-h-full">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 shadow-sm ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-green-600 text-white"
                          : "bg-muted border border-border/50"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2 border border-border/50">
                      <Loader className="w-4 h-4 animate-spin text-primary" />
                      <p className="text-sm text-muted-foreground">AI सोच रहा है...</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t border-border/50 p-3 bg-muted/20">
              <div className="flex gap-2">
                <Input
                  placeholder="अपना सवाल पूछें... (Ask your question...)"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  disabled={isLoading}
                  className="flex-1 bg-background/80 border-border/50 focus:border-primary"
                  data-testid="input-chatbot-message"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                  data-testid="button-chatbot-send"
                >
                  {isLoading ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AI-powered solar energy assistant
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
