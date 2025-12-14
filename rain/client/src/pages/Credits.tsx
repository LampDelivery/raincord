import { motion } from "framer-motion";
import { Heart, Code2, Palette, Globe, Gift } from "lucide-react";
import Navigation from "../components/Navigation";

const mainDeveloper = {
  name: "cocobo1",
  role: "Main Developer",
  github: "C0C0B01"
};

const contributors = [
  { name: "LampDelivery", role: "Website, Docs & Rain Logo", github: "LampDelivery" },
  { name: "kmmiio99o", role: "Contributor", github: "kmmiio99o" },
  { name: "Panniku", role: "Website Contributor", github: "panniku" },
  { name: "CloudySn0w", role: "Made base of KettuTweak", github: "CloudySn0w" },
  { name: "Mudrhoid", role: "Picked icon for KettuAddon browser", github: "mudrhiod" },
  { name: "Maisymoe", role: "Making Kettu's built in NoTrack plugin", github: "maisymoe" },
  { name: "Bunny Team", role: "Most of Kettu JS side", github: "bunny-mod" },
  { name: "Revenge Team", role: "Xposed and many fixes", github: "revenge-mod" },
  { name: "Vendetta Team", role: "Original project", github: "vendetta-mod" },
  { name: "Aliucord Team", role: "AliucordRN, which heavily influenced early projects + base for new manager and Xposed UI", github: "Aliucord" },
  { name: "Codeberg", role: "Graciously hosting the website, docs, project repo and translation", github: "Codeberg-org" },
  { name: "vmuser", role: "Contributor" },
  { name: "Devil", role: "Contributor" },
  { name: "Aeyric and rosiecord team", role: "Used as reference for chatbubbles" },
  { name: "Adv", role: "Making the manager logo work" },
  { name: "Purple_EyeZ and nexpid", role: "Parts of the addon browser and maintaining the list" },
  { name: "All project dependencies", role: "Many thanks to the many dependencies of this project such as spitroast for allowing this project to even exist" },
];

const donators = [
  { name: "Chocolate Milk" },
  { name: "Chloe~\u2661" },
  { name: "bruhours" },
  { name: "Mezque" },
  { name: "Fizz" },
];

export default function Credits() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 gradient-text">Credits</h1>
            <p className="text-muted-foreground text-lg">
              Thank you to everyone who made this project possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Main Developer</h2>
            </div>
            <a
              href={`https://github.com/${mainDeveloper.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 block hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://github.com/${mainDeveloper.github}.png`}
                  alt={mainDeveloper.name}
                  className="w-14 h-14 rounded-full bg-muted"
                />
                <div>
                  <p className="font-semibold text-lg">{mainDeveloper.name}</p>
                  <p className="text-muted-foreground text-sm">{mainDeveloper.role}</p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold">Contributors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contributors.map((contributor, index) => {
                const getContributorLink = () => {
                  if (contributor.github) return `https://github.com/${contributor.github}`;
                  return null;
                };
                
                const link = getContributorLink();
                const content = (
                  <div className="flex items-center gap-3">
                    {contributor.github ? (
                      <img
                        src={`https://github.com/${contributor.github}.png`}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full bg-muted"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground font-medium text-sm">
                          {contributor.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{contributor.name}</p>
                      <p className="text-muted-foreground text-sm">{contributor.role}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={contributor.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.03 }}
                  >
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card border border-border rounded-lg p-4 block hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="bg-card border border-border rounded-lg p-4">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Donators</h2>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex flex-wrap gap-3">
                {donators.map((donator, index) => (
                  <motion.div
                    key={donator.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
                  >
                    <Gift className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{donator.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
