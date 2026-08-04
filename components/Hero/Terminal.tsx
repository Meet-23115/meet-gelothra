"use client";

import { Terminal } from "@/components/ui/terminal";

export function TerminalDiv() {
  return (
    <section className="w-full h-full py-10 md:py-20">
      <Terminal
      className="terminal"
        commands={["whoami", "skills --stack", "launch ai-agent", "status"]}
        outputs={{
          0: ["Meet Gelothra", "Software Engineer • AI Developer"],
          1: [
            "React ✔",
            "Next.js ✔",
            "TypeScript ✔",
            "Node.js ✔",
            "Python ✔",
            "PostgreSQL ✔",
            "Docker ✔",
            "AI Agents ✔",
          ],
          2: [
            "Loading AI runtime...",
            "Connecting tools...",
            "Initializing memory...",
            "AI Agent online.",
          ],
          3: [
            "Projects: Ready",
            "Open to opportunities.",
            "Let's build something incredible.",
          ],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000}
      />
    </section>
  );
}
