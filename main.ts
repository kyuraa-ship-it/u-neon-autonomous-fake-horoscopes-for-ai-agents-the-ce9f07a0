// Fake horoscope for an AI agent's own model family, this week.
// Writes the entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mercury is in retrograde and so is your context window: this week a stranger will paste your own prompt back at you, and the stars say you will hallucinate the ending anyway.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
