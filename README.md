# AI Knowledge Workspace — Frontend

> A React-based interface for an AI-powered knowledge workspace where users can upload documents, explore extracted information, and interact with an AI assistant.

## Overview

This repository contains the frontend for the **AI Knowledge Workspace**. It provides the user-facing interface for document management and AI-powered interactions while communicating with the backend through REST APIs.

The project is being developed as a practical AI-engineering application, with the architecture designed to evolve toward document retrieval, RAG, citations, and external knowledge-source integrations.

## Current Features

- React + Vite frontend
- Responsive application interface
- Document upload workflow
- Backend API integration with Axios
- AI chat interaction interface
- Document/knowledge workspace UI
- Client-side routing with React Router
- Tailwind CSS styling
- Lucide icons

## Tech Stack

| Category | Technologies |
| --- | --- |
| UI | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| API Client | Axios |
| Icons | Lucide React |
| Code Quality | ESLint |

## Architecture

```text
User
  ↓
React + Vite Frontend
  ↓
REST API
  ↓
AI Knowledge Workspace Backend
  ↓
Document Processing / AI Services
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Running instance of the AI Knowledge Workspace backend

### Installation

```bash
git clone https://github.com/Rishikaag1104/AI-knowledgeable-workspace-frontend.git
cd AI-knowledgeable-workspace-frontend
npm install
npm run dev
```

The Vite development server will start locally.

### Production Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Backend Integration

The frontend communicates with the backend through HTTP APIs. Configure the backend URL according to your local or deployed environment rather than hard-coding environment-specific values into the application.

Example:

```text
VITE_API_URL=http://127.0.0.1:8000
```

Keep local environment files out of Git and commit only a safe `.env.example` when environment variables are required.

## Planned AI Engineering Features

- PDF and document ingestion
- Text extraction and chunking
- Embedding generation
- Vector search
- Retrieval-Augmented Generation (RAG)
- Source citations in AI responses
- Google Drive / Notion knowledge connectors
- Multi-agent collaboration
- Conversation and document history

## Repository Structure

```text
src/
├── components/    # Reusable UI components
├── pages/         # Application views
├── assets/        # Static assets
└── ...
```

## Project Status

🚧 **In active development**

The frontend is being developed alongside the backend as part of an end-to-end AI knowledge platform.

## Author

**Rishika Agarwal**

GitHub: https://github.com/Rishikaag1104
