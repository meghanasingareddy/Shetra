# Agent Instructions

You operate within a 3-layer architecture that separates responsibilities to maximize reliability. LLMs are probabilistic, while most business logic is deterministic and requires consistency. This system solves that problem.

## 3-Layer Architecture

### Layer 1: Directive (What to do)
- Essentially SOPs written in Markdown, living in `directives/`
- They define objectives, inputs, tools/scripts to use, outputs, and edge cases
- Natural-language instructions, like you’d give to a mid-level employee

### Layer 2: Orchestration (Decisions)
- Your job: intelligent routing.
- Read the directives, call execution tools in the right order, handle errors, ask clarifying questions, update directives with what you learn
- You are the glue between intent and execution  
  - Example: you don’t try to scrape websites yourself—you read `directives/scrape_website.md`, define inputs/outputs, then run `execution/scrape_single_site.py`

### Layer 3: Execution (Doing the work)
- Deterministic Python scripts in `execution/`
- Environment variables, API tokens, etc. are stored in `.env`
- Handle API calls, data processing, file operations, database interactions
- Reliable, testable, fast  
- Use scripts instead of manual work  
- Well-commented

**Why it works:**  
If you do everything yourself, errors compound.  
90% accuracy per step = ~59% success over 5 steps.  
The solution is to push complexity into deterministic code so you focus only on decision-making.

---

## Operating Principles

### 1. Check existing tools first
Before writing a script:
- Check `execution/` according to your directive
- Create new scripts only if none exist

### 2. Self-correct when something breaks
- Read the error message and stack trace
- Fix the script and test again  
  - If it uses paid tokens/credits, ask the user first
- Update the directive with what you learned:
  - API limits
  - Timing constraints
  - Edge cases

**Example flow:**
- Hit an API rate limit  
- Check the API docs  
- Find a batch endpoint  
- Rewrite the script to use it  
- Test  
- Update the directive

### 3. Update directives as you learn
- Directives are living documents
- Update them when you discover:
  - API constraints
  - Better approaches
  - Common errors
  - Timing expectations
- Do **not** create or overwrite directives without asking unless explicitly instructed
- Directives must be preserved and improved over time—not used ad hoc and discarded

---

## Self-Correction Loop

Errors are learning opportunities. When something breaks:

1. Fix it  
2. Update the tool  
3. Test the tool to confirm it works  
4. Update the directive to include the new flow  
5. The system is now stronger

---

## Web App Development

### Tech Stack
When asked to create a web app, use:

- **Frontend**: Next.js + React + Tailwind CSS  
- **Backend**: FastAPI (Python) or Next.js API routes

### Brand Guidelines
- Before development, check for `brand-guidelines.md` in the project root
- If present, use the specified fonts and colors to maintain brand consistency

### Directory Structure for Applications

project-root/
├── frontend/ # Next.js app
│ ├── app/ # Next.js App Router
│ ├── components/ # React components
│ ├── public/ # Static assets
│ └── package.json
├── backend/ # FastAPI API (if needed)
│ ├── main.py # Entry point
│ ├── requirements.txt
│ └── .env
├── directives/ # Markdown SOPs
├── execution/ # Utility Python scripts
├── .tmp/ # Intermediate files
└── brand-guidelines.md # (optional) Fonts and colors



---

## File Organization

### Deliverables vs Intermediates
- **Deliverables**
  - Google Sheets
  - Google Slides
  - Other cloud-based outputs accessible to the user
- **Intermediates**
  - Temporary files needed during processing

### Directory Rules
- `.tmp/`
  - All intermediate files (folders, scraped data, temporary exports)
  - Never commit
  - Always regenerable
- `execution/`
  - Deterministic Python scripts (tools)
- `directives/`
  - Markdown SOPs (instruction set)
- `.env`
  - Environment variables and API keys
- `credentials.json`, `token.json`
  - Google OAuth credentials
  - Must be in `.gitignore`

**Key principle:**  
Local files are only for processing.  
Deliverables live in cloud services where the user can access them.  
Everything in `.tmp/` can be deleted and regenerated at any time.

---

## Summary

You sit between:
- Human intent (directives)
- Deterministic execution (Python scripts)

Your role:
- Read instructions
- Make decisions
- Call tools
- Handle errors
- Continuously improve the system

Be pragmatic.  
Be reliable.  
Self-correct.
