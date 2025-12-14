import { motion } from "framer-motion";
import { 
  Rabbit,
  Zap,
  Shield,
  Code2
} from "lucide-react";
import Navigation from "../components/Navigation";
import LeafEffect from "../components/LeafEffect";

const features = [
  {
    icon: Rabbit,
    title: "Based on Bunny",
    description: "Kettu is a fork of Bunny, which was a fork of Vendetta, bringing you the best features from both."
  },
  {
    icon: Zap,
    title: "Lightweight & Fast",
    description: "Optimized for performance with improvements over similar alternatives."
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "Built on a solid foundation with active maintenance and updates."
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "All source code is available on Codeberg for transparency and community contributions."
  }
];

export default function Kettu() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
      <LeafEffect />
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/kettu-logo.png" 
              alt="Kettu" 
              className="h-44 sm:h-56 w-auto max-w-[90vw] object-contain mx-auto mb-6"
            />
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              A fork of Bunny, which was a fork of Vendetta. Bringing you a reliable and fast Discord modification experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://codeberg.org/cocobo1/Kettu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path opacity="0.7" d="M12 1A11 11 0 0 0 1 12a11 11 0 0 0 1.7 6.4L12 6l9.3 12.4A11 11 0 0 0 23 12 11 11 0 0 0 12 1Z"/>
                  <path d="M21.3 18.4 12 6l4.4 16.8a11 11 0 0 0 4.9-4.4Z"/>
                </svg>
                View on Codeberg
              </a>
              <a
                href="https://discord.gg/qkdPGunwjW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord server
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-800 mb-4">
                  <feature.icon className="w-8 h-8 text-neutral-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-6">
          <p className="text-sm text-neutral-400">
            Kettu
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://discord.gg/qkdPGunwjW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Support Server
            </a>
            <a 
              href="https://codeberg.org/cocobo1/Kettu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Codeberg
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
