import { Link, useLocation } from "wouter";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/body", label: t("nav.body") },
    { href: "/hygiene", label: t("nav.hygiene") },
    { href: "/myths", label: t("nav.myths") },
    { href: "/ask", label: t("nav.ask") },
  ];

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <Heart className="w-6 h-6 text-primary fill-primary/20" />
            </div>
            <span className="font-bold text-xl text-foreground tracking-tight">
              Period<span className="text-primary">Guide</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLang}
              className="ml-2 rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary font-bold"
            >
              {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLang}
              className="rounded-full font-bold text-primary"
            >
              {language === 'en' ? 'ಕನ್ನಡ' : 'En'}
            </Button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    location === item.href 
                      ? "bg-primary/10 text-primary" 
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
