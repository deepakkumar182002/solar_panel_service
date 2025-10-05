import { Footer } from "../Footer";
import { ThemeProvider } from "../ThemeProvider";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <p className="text-muted-foreground">Page content goes here</p>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
