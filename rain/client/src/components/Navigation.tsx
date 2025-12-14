import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kettu", label: "Kettu" },
  { href: "/docs", label: "Docs" },
  { href: "/faq", label: "FAQ" },
  { href: "/credits", label: "Credits" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isKettuTab, setIsKettuTab] = useState(false);
  const isKettu = location === "/kettu";
  const isDocs = location === "/docs";
  const isFAQ = location === "/faq";

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = sessionStorage.getItem("docsKettuTab");
      setIsKettuTab(stored === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const getHeaderTitle = () => {
    if (isKettu) return "Kettu";
    if (isDocs) return "Docs";
    if (isFAQ) return "FAQ";
    return "rain";
  };
  
  const getHeaderLink = () => {
    if (isKettu) return "/kettu";
    if (isDocs) return "/docs";
    if (isFAQ) return "/faq";
    return "/";
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav 
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${(isKettu || (isDocs && isKettuTab)) ? 'border-white/10' : 'border-border'}`}
      style={(isKettu || (isDocs && isKettuTab)) ? { backgroundColor: '#000000' } : { backgroundColor: 'rgba(var(--background), 0.8)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-center gap-12">
        <Link href={getHeaderLink()} className={`text-xl font-bold ${(isKettu || (isDocs && isKettuTab)) ? 'text-white' : 'gradient-text'}`}>
          {getHeaderTitle()}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={(isKettu || (isDocs && isKettuTab))
                ? `transition-colors ${location === link.href ? "text-white font-medium" : "text-white/70 hover:text-white"}`
                : `nav-link ${location === link.href ? "active" : ""}`
              }
            >
              {link.label}
            </Link>
          ))}
          {mounted && !isKettu && !(isDocs && isKettuTab) && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="sm:hidden flex items-center gap-2 ml-auto">
          {mounted && !isKettu && !(isDocs && isKettuTab) && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${(isKettu || (isDocs && isKettuTab)) ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`sm:hidden border-t ${(isKettu || (isDocs && isKettuTab)) ? 'border-white/10' : 'border-border'}`}
            style={(isKettu || (isDocs && isKettuTab)) ? { backgroundColor: '#000000' } : {}}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-lg transition-colors ${
                    (isKettu || (isDocs && isKettuTab))
                      ? (location === link.href ? "text-white font-medium" : "text-white/70 hover:text-white")
                      : (location === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground")
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
