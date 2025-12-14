import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Kettu from "@/pages/Kettu";
import Docs from "@/pages/Docs";
import FAQ from "@/pages/FAQ";
import Credits from "@/pages/Credits";
import RainEffect from "@/components/RainEffect";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/kettu" component={Kettu}/>
      <Route path="/docs" component={Docs}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/credits" component={Credits}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const [location] = useLocation();
  const isKettu = location === "/kettu";
  const isDocs = location === "/docs";
  
  return (
    <TooltipProvider>
      {!isKettu && !isDocs && <RainEffect />}
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
