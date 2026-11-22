# Medical Literacy Handbook: instructions for Claude

A single-volume, English handbook for one private reader in India. It aims to be a **complete source** that makes a beginner medically aware and literate: able to understand the body, common diseases, lab reports and medicines, to question a doctor sensibly, and to spot wrong reports, wrong medicines and upselling.

It is a **reference handbook**, not a blog. It is **not** a replacement for a doctor.

The reader is a beginner with no medical background. Write for them.

## Hard rules (never break)

1. **No doses and no "start or stop this drug" advice.** Teach what a medicine class is for, its main risks, and what to ask. Never say how much to take.
2. **Every factual claim has a source** named in the chapter's "Sources" list. Prefer Indian sources (ICMR, MoHFW, NLEM, CDSCO, NPPA, RSSDI, ESI, ISG), then WHO, then major international guidelines (ADA, ATA, AASLD, ACG, ESC), then peer-reviewed reviews. A claim with no source is cut or marked `⚠ verify`.
3. **Reference ranges are examples.** A reference range is not a diagnostic cut-off, and neither is a treatment target. Always say ranges differ by lab, method, age, sex and pregnancy.
4. **Say what could not be verified.** Mark it `⚠ verify` in the text and list it in the chapter's "Not verified" box. Never invent a number.
5. **Define every medical word at first use**, in the same sentence or in a short bracket. Every chapter ends with a "Key terms" list. When unsure whether a word needs defining, define it.
6. **Beginner writing.** Short sentences, one idea per paragraph, plain words, small made-up examples labelled "example". Explain the normal body first, then what goes wrong.
7. **Do not repeat an explanation another chapter already gives.** Link to it.
8. **Never put the reader's own reports, names or numbers in this repo.** Personal files go in `my-reports/` (git-ignored).
9. **A doctor must review each chapter before the reader relies on it.** Each chapter carries a status line.
10. **India first.** Mention Indian prevalence, drug availability and cost, regulation, and common local practices where relevant.

## Structure

Parts, in reading order (folders in the repo):

`00-start-here` · `01-body` · `02-diseases` · `03-tests` · `04-medicines` · `05-nutrition` · `06-life-stages` · `07-prevention` · `08-decisions` · `09-indian-healthcare` · `10-practical` · `appendix`

See `ROADMAP.md` for the full chapter list and status.

## Disease chapter template (fixed)

```
# Disease name
Status line (Draft / Reviewed by <name>, <date>)
> Quick summary (3 to 4 lines)

## 1. What is it?
## 2. The normal body (organ, what it does)
## 3. What goes wrong
## 4. Causes and risk factors
## 5. Symptoms
## 6. Diagnosis and tests   (use marker cards)
## 7. Treatment             (benefits and risks, no doses)
## 8. Complications
## 9. Prevention and self-management
## 10. Misinformation and how you get misled (India)
## 11. Ask your doctor
## 12. Red flags
## Key terms
## Sources and not verified
```

## Marker card (fixed, for each lab test or measurement)

```
### Marker name
| What it measures | |
| Why the body needs it | |
| Can be raised by | |
| Can be lowered by | |
| What else you need to interpret it | |
| Example range (varies by lab) | |
```

## Before saying a chapter is ready

1. **Jargon test.** Read as someone who started learning biology last month. List every word they might search for. Define it at first use or replace it. Include headings and tables.
2. **Fact check.** Check numbers and claims against the named sources. Say what could not be verified.
3. Tell the author which words were defined, replaced or cut, and what is unverified.

## Working rules

- Do not commit or push until the author says so. End commit messages with the `Co-Authored-By` line the session gives.
- The reader views Markdown on GitHub. Use relative links and GitHub alerts (`> [!NOTE]`, `> [!WARNING]`). Draw figures as plain text in code blocks.
- Before pushing, scan for names, phone numbers, lab names and personal data.
