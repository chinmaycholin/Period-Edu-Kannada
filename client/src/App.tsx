import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import Body from "@/pages/Body";
import Hygiene from "@/pages/Hygiene";
import Myths from "@/pages/Myths";
import Ask from "@/pages/Ask";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper><Home /></PageWrapper>
        </Route>
        <Route path="/body">
          <PageWrapper><Body /></PageWrapper>
        </Route>
        <Route path="/hygiene">
          <PageWrapper><Hygiene /></PageWrapper>
        </Route>
        <Route path="/myths">
          <PageWrapper><Myths /></PageWrapper>
        </Route>
        <Route path="/ask">
          <PageWrapper><Ask /></PageWrapper>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

// Wrapper for page transitions
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Toaster />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
