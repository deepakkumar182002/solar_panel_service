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

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "नमस्ते! मैं Devanshi Renewable Energy का Solar Energy Assistant हूं। मैं आपकी solar energy से related सभी queries में help कर सकता हूं।\n\nआप मुझसे पूछ सकते हैं:\n• Solar installation cost\n• Savings calculator\n• Maintenance info\n• Government subsidies\n• Installation process\n\nकैसे मदद कर सकता हूं?",
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
    const systemPrompt = `आप Devanshi Renewable Energy के लिए एक सहायक solar energy assistant हैं। आप हिंदी और अंग्रेजी दोनों भाषाओं में जवाब दे सकते हैं। 
    
    आपको solar energy, installations, costs, maintenance, benefits के बारे में सटीक और उपयोगी जानकारी देनी चाहिए। 
    
    मुख्य सेवाएं:
    - Residential Solar Installation (घरेलू सोलर)
    - Commercial Solar Solutions (व्यावसायिक सोलर)  
    - Industrial Solar Plants (औद्योगिक सोलर)
    - Maintenance & Support (रखरखाव)
    - Solar Calculator (सोलर कैलकुलेटर)
    
    कीमत के बारे में पूछने पर बताएं कि costs vary करती है और accurate quotes के लिए consultation recommend करें।
    हमेशा professional और encouraging रहें solar energy adoption के लिए।
    
    Response concise but informative रखें।`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: input }
          ],
          max_tokens: 200,
          temperature: 0.8,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('OpenAI API Error:', response.status, errorData);
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content.trim();
      } else {
        throw new Error('Invalid response format from OpenAI');
      }
    } catch (error) {
      console.error('OpenAI Request Error:', error);
      
      // Fallback to default responses if OpenAI fails
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("कीमत")) {
        return "सोलर पैनल की कीमत system size पर निर्भर करती है। एक typical residential system (5-10 kW) की cost ₹3-6 लाख है। Accurate quote के लिए free consultation लें!";
      }
      if (lowerInput.includes("savings") || lowerInput.includes("बचत")) {
        return "ज्यादातर customers अपने electricity bills में 50-70% की बचत करते हैं! हमारे Solar Calculator से अपनी potential savings calculate करें।";
      }
      if (lowerInput.includes("maintenance") || lowerInput.includes("रखरखाव")) {
        return "Solar panels में बहुत कम maintenance चाहिए। Regular cleaning और annual inspection से 25+ साल तक चलते हैं। हमारे AMC packages भी उपलब्ध हैं।";
      }
      if (lowerInput.includes("install") || lowerInput.includes("time") || lowerInput.includes("समय")) {
        return "Installation typically 2-5 दिन में पूरी हो जाती है। हमारी expert team सभी permits और grid connection handle करती है।";
      }
      
      return "मैं आपकी solar energy से related सभी queries में help कर सकता हूं! Free consultation के लिए हमसे contact करें या Solar Calculator use करके savings estimate करें।";
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
