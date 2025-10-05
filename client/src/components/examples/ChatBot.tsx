import { ChatBot } from "../ChatBot";
import { ThemeProvider } from "../ThemeProvider";

export default function ChatBotExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center p-8">
        <p className="text-center text-muted-foreground">
          Click the chat button in the bottom-right corner to start chatting
        </p>
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}
