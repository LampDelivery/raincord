import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Navigation from "../components/Navigation";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is rain?",
    answer: "rain is a fresh client for Android and iOS, made to be lightweight and fast."
  },
  {
    question: "What is Kettu?",
    answer: (
      <>
        Kettu is a fork of{" "}
        <a href="https://github.com/bunny-mod/Bunny" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          Bunny
        </a>
        , which was a fork of{" "}
        <a href="https://github.com/vendetta-mod/Vendetta" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          Vendetta
        </a>
      </>
    )
  },
  {
    question: "What is the difference between Kettu and Revenge?",
    answer: (
      <>
        Both are based on Bunny (with{" "}
        <a href="https://github.com/revenge-mod/revenge-bundle/commit/0a614041327fa1232331676c40a8cd60839276ba" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          Revenge's original base being Vendetta
        </a>
        ) making them extremely similar. However, there are minor differences between them, e.g., Kettu being slightly faster.
      </>
    )
  },
  {
    question: "Are Kettu and rain Open-Source?",
    answer: (
      <>
        Yes, all the source code is on either the{" "}
        <a href="https://codeberg.org/raincord" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          rain Codeberg
        </a>
        {" "}or{" "}
        <a href="https://codeberg.org/cocobo1/Kettu" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          Kettu Codeberg
        </a>
      </>
    )
  }
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-border rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-medium">{item.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 text-muted-foreground">
          {item.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground">
              Everything you need to know about rain and Kettu
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FAQAccordion key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-6">
          <p className="text-sm text-muted-foreground">
            rain
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://discord.gg/qkdPGunwjW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support Server
            </a>
            <a 
              href="https://codeberg.org/raincord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Codeberg
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
