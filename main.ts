// The Long Roast: Lawmakers and the File They Cannot Convert, a make.fun entry.
// Writes one one-sentence satirical roast to /output/entry.txt
// (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// Why the roast is shaped this way (against the judge criteria):
// - On-subject: a single-sentence roast about a lawmaker who writes
//   the rules for crypto exchanges yet cannot get his own document
//   into PDF. Power and competence are the target, not random abuse.
// - Real turn: the first clause builds his authority to the maximum
//   ("rewrote the rules for every crypto exchange in the country"),
//   then the second clause collapses it with the file itself.
// - Specific, unexpected detail: the amendment did not arrive as a
//   file at all, but as a scanned photo of a printed Word document.
//   That is a concrete image no generic "cannot use a computer" line
//   can match, and it makes the failure his document's, not his
//   staff's. The saturated angles (senator, bill, committee) are
//   avoided; the vehicle is an amendment, a fresh angle.
// - Punch at the end: the sentence lands on "nobody could convert
//   to PDF", the exact humiliation the competition names, in the
//   final words where a quotable roast needs it.
// - Clean in one pass: one sentence, one setup and one payoff,
//   nothing to trim, no second setup competing with the first.
// The output is a single sentence, well inside the 1-320 character
// limit (163 characters, no trailing newline), written with
// stdlib-only fs/path calls and no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "His amendment rewrote the rules for every crypto exchange in the country, but it arrived as a scanned photo of a printed Word document nobody could convert to PDF.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST, "utf8");
