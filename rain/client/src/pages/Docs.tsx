import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import LeafEffect from "../components/LeafEffect";
import RainEffect from "../components/RainEffect";

interface DocSection {
  title: string;
  content: React.ReactNode;
}

const rainDocSections: DocSection[] = [
  {
    title: "What is rain?",
    content: "rain is a work-in-progress custom client for discord aimed at being written from the ground up, depending on code from as little projects as possible (minus the kotlin side)."
  },
  {
    title: "When will rain be available and what devices will it be available for?",
    content: "rain currently is still nowhere near a state where it is ready for any sort of release. as for platforms it will be available for, android is the target however iOS is something that is being planned!"
  },
  {
    title: "How can I support the project?",
    content: "rain can be supported in many ways, you can contribute, make a bug report or donate"
  },
  {
    title: "Bug-reporting",
    content: "Bug reports are a crucial part of development, they make the project more stable and make developers aware of issues. before filing an issue please make sure it isnt a duplicate"
  },
  {
    title: "Contributing",
    content: (
      <>
        Contributing can be many things: a bug fix, a new plugin, translation. git commits are made in the layout of: <code className="bg-secondary px-2 py-1 rounded text-sm">category(target): what you did</code> e.g. "made #### be #####"
      </>
    )
  }
];

const kettuDocSections: DocSection[] = [
  {
    title: "Installing",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Android</h3>
          <ul className="list-disc list-inside space-y-1 text-neutral-400">
            <li><span className="text-white font-medium">Root with Xposed</span> - KettuXposed</li>
            <li><span className="text-white font-medium">Non-root</span> - KettuManager</li>
          </ul>
          <p className="text-sm text-neutral-400 mt-2 italic">If you do not know what root is, go with the manager</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">iOS</h3>
          <ul className="list-disc list-inside space-y-1 text-neutral-400">
            <li><span className="text-white font-medium">Jailbroken</span> - KettuTweak</li>
            <li><span className="text-white font-medium">Jailed</span> - BTLoader</li>
          </ul>
          <p className="text-sm text-neutral-400 mt-2 italic">If you don't know what jailbreak is, go with BTLoader</p>
        </div>
      </div>
    )
  },
  {
    title: "Building",
    content: (
      <div className="space-y-4 text-neutral-400">
        <ol className="list-decimal list-inside space-y-3">
          <li>Install a Kettu loader with loader config support (any mentioned in the Installing section).</li>
          <li>Go to <span className="text-white">Settings &gt; General</span> and enable <span className="text-white">Developer Settings</span>.</li>
          <li>
            Clone the repo:
            <pre className="bg-neutral-800 rounded-lg p-3 mt-2 overflow-x-auto text-sm"><code>git clone https://codeberg.org/cocobo1/Kettu</code></pre>
          </li>
          <li>
            Install dependencies:
            <pre className="bg-neutral-800 rounded-lg p-3 mt-2 overflow-x-auto text-sm"><code>bun i</code></pre>
          </li>
          <li>
            Build Kettu's code:
            <pre className="bg-neutral-800 rounded-lg p-3 mt-2 overflow-x-auto text-sm"><code>bun run build</code></pre>
          </li>
          <li>In the newly created <code className="bg-neutral-800 px-2 py-1 rounded text-sm">dist</code> directory, run a HTTP server. I recommend <code className="bg-neutral-800 px-2 py-1 rounded text-sm">http-server</code>.</li>
          <li>Go to <span className="text-white">Settings &gt; Developer</span> enabled earlier. Enable <span className="text-white">Load from custom url</span> and input the IP address and port of the server (e.g. <code className="bg-neutral-800 px-2 py-1 rounded text-sm">http://192.168.1.236:4040/kettu.js</code>) in the new input box labelled <span className="text-white">Kettu URL</span>.</li>
          <li>Restart Discord. Upon reload, you should notice that your device will download Kettu's bundled code from your server, rather than GitHub.</li>
          <li>Make your changes, rebuild, reload, go wild!</li>
        </ol>
        <div className="mt-4 p-4 bg-neutral-800/50 rounded-lg">
          <p className="text-sm">
            <span className="text-white font-medium">Tip:</span> Alternatively, you can directly serve the bundled code by running <code className="bg-neutral-800 px-2 py-1 rounded text-sm">bun run serve</code>. kettu.js will be served on your local address under the port 4040. You will then insert <code className="bg-neutral-800 px-2 py-1 rounded text-sm">http://&lt;local ip address&gt;:4040/kettu.js</code> as a custom url and reload. Whenever you restart your mobile client, the script will rebuild the bundle as your client fetches it.
          </p>
        </div>
      </div>
    )
  }
];

export default function Docs() {
  const [activeTab, setActiveTab] = useState<"rain" | "kettu">("rain");
  const isKettu = activeTab === "kettu";

  const docSections = activeTab === "rain" ? rainDocSections : kettuDocSections;
  const title = activeTab === "rain" ? "rain documentation" : "Kettu documentation";
  const description = activeTab === "rain" 
    ? "rain is a work-in-progress custom Discord client for android, designed to be lightweight and feature-packed!"
    : "A fork of Bunny, bringing you a reliable and fast Discord modification experience.";

  useEffect(() => {
    sessionStorage.setItem("docsKettuTab", isKettu.toString());
    window.dispatchEvent(new Event("storage"));
  }, [isKettu]);

  return (
    <div 
      className={`min-h-screen ${isKettu ? 'text-white' : 'bg-background text-foreground'}`}
      style={isKettu ? { backgroundColor: '#000000' } : undefined}
    >
      {isKettu ? <LeafEffect key="leaf" /> : <RainEffect key="rain" />}
      <Navigation />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-lg p-1 ${isKettu ? 'bg-neutral-800 border border-neutral-700' : 'bg-card border border-border'}`}>
              <button
                onClick={() => setActiveTab("rain")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === "rain"
                    ? (isKettu ? "bg-neutral-700 text-white" : "bg-primary text-primary-foreground")
                    : (isKettu ? "text-neutral-400 hover:text-white" : "text-muted-foreground hover:text-foreground")
                }`}
              >
                rain
              </button>
              <button
                onClick={() => setActiveTab("kettu")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === "kettu"
                    ? (isKettu ? "bg-neutral-700 text-white" : "bg-primary text-primary-foreground")
                    : (isKettu ? "text-neutral-400 hover:text-white" : "text-muted-foreground hover:text-foreground")
                }`}
              >
                Kettu
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isKettu ? 'text-white' : ''}`}>
              {title}
            </h1>
            <p className={`text-lg ${isKettu ? 'text-neutral-400' : 'text-muted-foreground'}`}>
              {description}
            </p>
          </motion.div>

          <div className="space-y-8">
            {docSections.map((section, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg p-6 ${isKettu ? 'border border-neutral-800' : 'border border-border'}`}
              >
                <h2 className={`text-xl font-semibold mb-3 ${isKettu ? 'text-white' : ''}`}>{section.title}</h2>
                <div className={isKettu ? 'text-neutral-400' : 'text-muted-foreground'}>{section.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer 
        className={`py-8 px-6 border-t ${isKettu ? 'border-neutral-800' : 'border-border'}`}
        style={isKettu ? { backgroundColor: '#000000' } : undefined}
      >
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-6">
          <p className={`text-sm ${isKettu ? 'text-neutral-400' : 'text-muted-foreground'}`}>
            {activeTab === "rain" ? "rain" : "Kettu"}
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://discord.gg/qkdPGunwjW" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${isKettu ? 'text-neutral-400 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Support Server
            </a>
            <a 
              href={activeTab === "rain" ? "https://codeberg.org/raincord" : "https://codeberg.org/cocobo1/Kettu"}
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${isKettu ? 'text-neutral-400 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Codeberg
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
