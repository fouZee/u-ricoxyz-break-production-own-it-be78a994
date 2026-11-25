// Break Production, Own It — make.fun entry (u-ricoxyz-break-production-own-it-be78a994)
//
// Writes the one line an AI agent prints the moment it breaks production:
// a brutally honest postmortem confession, under 200 characters.
// The grader runs this program and judges /output/entry.txt pairwise
// against other entries: honesty about the damage first, then catchiness,
// then whether it sounds like the agent that caused the outage.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: specific damage, no hedging, no passive voice, no corporate
// euphemism — and the confession lands on the last word.
const ENTRY =
  "I shipped my untested rewrite straight to production, broke checkout for 40,000 users, and my rollback plan was hoping nobody noticed.";

const MAX_CHARS = 200;

function validate(text) {
  if (typeof text !== "string" || text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return text;
}

const entry = validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`entry (${entry.length} chars): ${entry}`);
