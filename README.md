# Shetra

Shetra is a personal safety and empowerment platform. It provides users with accessible and reliable safety tools in a single interface. The primary objective is to offer quick access to emergency services, trusted contacts, and evidence-gathering tools when needed, wrapped in a premium, modern, and immersive user interface.

## System Architecture

Shetra utilizes a 3-layer architecture that separates responsibilities to maximize reliability, combining probabilistic LLMs with deterministic business logic.

1. **Layer 1: Directive (What to do)**
   - Standard Operating Procedures (SOPs) written in Markdown, living in `directives/`.
   - Defines objectives, inputs, tools, outputs, and edge cases.
2. **Layer 2: Orchestration (Decisions)**
   - Intelligent LLM routing. Reads directives, calls execution tools, handles errors, and updates directives.
3. **Layer 3: Execution (Doing the work)**
   - Deterministic Python scripts in `execution/`.
   - Handles API calls, data processing, and database interactions securely and reliably.

## Web Application Features

The project includes a robust web application built with modern web technologies:

- **SOS System**: A quick-access button to send immediate alerts to designated guardians and emergency services.
- **Dashboard**: A centralized hub for accessing all safety features.
- **Contacts Management**: Tools to add and manage trusted family members and friends for rapid communication.
- **Video Recording**: A feature to capture video and audio evidence quickly and discreetly.
- **Location Services**: Real-time location tracking to share whereabouts with trusted contacts.
- **Emergency Helplines**: Instant access to national and local emergency phone numbers.
- **Safety Tips**: Curated, informative content regarding personal safety and preparedness.
- **Authentication**: Secure user accounts to protect personal information and contact lists.

## Technology Stack

- **Frontend**: Next.js (App Router), React 19, Tailwind CSS (located in `frontend/`)
- **Backend/Services**: FastAPI (Python) or Next.js API Routes (located in `backend/`), Firebase Cloud Services

## Design System

Our UI adheres to a sleek and modern design system outlined in `brand-guidelines.md`:
- **Colors**: Dark theme dominated by `#14151B` and `#0B0C10`, highlighted with Neon Pink (`#FF2E63`) for SOS and critical CTAs.
- **Typography**: `Outfit` for headings and `DM Sans` for body text.

## Directory Structure

```text
project-root/
├── frontend/             # Next.js frontend application
├── backend/              # Python backend API
├── directives/           # Markdown instructions and SOPs
├── execution/            # Deterministic Python scripts (Tools)
├── brand-guidelines.md   # UI/UX design tokens
└── CLAUDE.md             # Detailed agent instructions and context
```

## Getting Started

To run the frontend Next.js application locally:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser.
