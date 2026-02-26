# Shetra – Real-Time Personal Safety Platform for Women

Shetra is a real-time personal safety and empowerment platform designed to provide instant emergency response, trusted contact alerts, secure evidence capture, and live location sharing — all within a modern, immersive interface.

Built using a layered architecture that combines deterministic backend execution with intelligent orchestration, Shetra ensures that critical safety actions are executed instantly, securely, and reliably.

---

## Overview

Shetra was designed to address key shortcomings in existing safety applications:

- Delayed emergency execution
- Inconsistent reliability
- Poor evidence management
- Weak privacy considerations
- Outdated or cluttered user interfaces

The platform focuses on speed, reliability, security, and usability during high-stress situations.

---

## Core Features

### SOS System
- One-tap emergency trigger
- Instant alerts to trusted guardians
- Real-time location sharing
- Configurable emergency escalation logic

### Dashboard
- Centralized safety hub
- Quick access to all safety tools
- Live status overview

### Contacts Management
- Add and manage trusted contacts
- Categorize emergency roles
- Secure storage of guardian details

### Video and Audio Recording
- Rapid evidence capture
- Secure media handling
- Backend upload and storage integration

### Location Services
- Real-time location tracking
- Secure sharing with selected contacts
- Controlled access permissions

### Emergency Helplines
- Quick access to national and local emergency numbers
- Region-based configuration support

### Safety Resources
- Curated safety guidance
- Preparedness information

### Authentication
- Secure account creation and login
- Firebase authentication integration
- Protected user data and contact lists

---

## System Architecture

Shetra follows a structured 3-layer architecture to maximize reliability and separation of concerns.

### Layer 1: Directive Layer (What to Do)
- Standard Operating Procedures (SOPs) written in Markdown
- Defines objectives, inputs, outputs, tools, and edge cases
- Stored in `directives/`

### Layer 2: Orchestration Layer (Decision Engine)
- Intelligent routing logic
- Reads directives and determines execution flow
- Handles error recovery and fallback mechanisms
- Bridges probabilistic reasoning with deterministic execution

### Layer 3: Execution Layer (Deterministic Operations)
- Python-based scripts in `execution/`
- Handles API calls, database interactions, and processing
- Ensures predictable and secure outcomes

### Architectural Flow

User Action (Frontend)  
→ API Layer  
→ Orchestration Layer  
→ Execution Layer  
→ Firebase / External Services  
→ Response to User

This separation ensures high reliability for safety-critical operations.

---

## Technology Stack

### Frontend
- Next.js (App Router)
- React 19
- Tailwind CSS
- Located in `frontend/`

### Backend
- FastAPI (Python) or Next.js API Routes
- Firebase Cloud Services
- Located in `backend/`

### Database & Services
- Firebase Authentication
- Firebase Firestore
- Firebase Storage

---

## Security and Privacy

Given the sensitive nature of personal safety systems, Shetra is designed with security-first principles:

- Secure authentication via Firebase
- Controlled access to user data
- Secure media storage
- Minimal data exposure
- Role-based backend logic
- Clear separation of deterministic execution logic

Future iterations may include:
- End-to-end encrypted communication
- Encrypted offline media buffering
- Multi-factor authentication

---

## Design System

The application follows a modern dark-themed design system defined in `brand-guidelines.md`.

- Primary Background: #14151B
- Secondary Background: #0B0C10
- Accent Color: #FF2E63 (used for critical actions such as SOS)
- Typography:
  - Outfit for headings
  - DM Sans for body text

The design emphasizes clarity, contrast, and fast accessibility during emergencies.

---

## Project Structure

```
project-root/
├── frontend/             # Next.js frontend application
├── backend/              # Python backend API
├── directives/           # Markdown SOP definitions
├── execution/            # Deterministic Python tools
├── brand-guidelines.md   # UI/UX design tokens
└── CLAUDE.md             # Agent instructions and system context
```

---

## Getting Started

### Run Frontend Locally

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open:
   ```
   http://localhost:3000
   ```

---

## Environment Variables

The following environment variables are required:

Frontend:
- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_BACKEND_URL

Backend:
- FIREBASE_SERVICE_ACCOUNT
- DATABASE_URL
- SECRET_KEY

---

## Deployment

Recommended deployment setup:

- Frontend: Vercel
- Backend: Render / Railway / AWS
- Database: Firebase Firestore
- Media Storage: Firebase Storage

---

## Testing Strategy

- Unit tests for execution layer scripts
- API integration testing
- Manual workflow simulation for emergency scenarios

---

## Roadmap

- Bluetooth-based physical panic trigger
- Background anomaly-based risk detection
- AI-assisted situational guidance
- Offline evidence buffering
- Anonymous distress broadcast mode

---

## Contributing

The project is currently under active development. Contributions, feedback, and feature suggestions are welcome.

---

## License

MIT License

---

## Author

Meghana Reddy  
B.Tech CSE – Artificial Intelligence & Machine Learning  
LinkedIn: https://linkedin.com/in/singareddy-meghana-reddy-030527292  
LeetCode: https://leetcode.com/meghanasingareddy
