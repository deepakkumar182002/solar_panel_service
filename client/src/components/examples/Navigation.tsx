import { Navigation } from "../Navigation";
import { ThemeProvider } from "../ThemeProvider";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 p-8">
          <p className="text-center text-muted-foreground">Scroll to see sticky navigation effect</p>
          <div className="h-[150vh]"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}
