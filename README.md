# AI Search Engine

An AI-powered search and conversation platform inspired by Perplexity. The application combines web search, large language models, and conversational AI to provide fast, context-aware answers with a modern user experience and also give the followups.

---

# 📸 Screenshots

## Home Page

![Home Page](./screenshots/home.png)

---

## Conversation Page

![Conversation Page](./screenshots/conversation.png)

---

# ✨ Features

### 🔍 AI Search

- Natural language search queries
- Context-aware responses
- Multi-turn conversations
- Follow-up question support

### 🤖 AI Powered

- Gemini LLM integration
- Streaming AI responses
- Conversation memory
- Citation-ready architecture

### 🔐 Authentication

- Supabase Authentication
- Login with Google
- Login with GitHub
- Secure session management

### 💬 Conversation Management

- Persistent chat history
- Conversation organization
- Search through previous chats
- User-specific conversations

### 🎨 Modern UI

- Responsive design
- Accessible Radix UI components
- Fast navigation
- Dark mode support

---

# 🏗️ System Architecture

```text
Frontend (React)
       │
       ▼
Backend API (Express.js + Bun)
       │
       ├───────────────► Gemini API
       │                    │
       │                    ▼
       │             AI Generated Response
       │
       ▼
Prisma ORM
       │
       ▼
Supabase PostgreSQL

Authentication
       │
       ▼
Supabase Auth
```

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Bun
- Tailwind CSS
- Radix UI

## Backend

- Express.js
- TypeScript
- Bun Runtime

## Database

- Supabase PostgreSQL
- Prisma ORM

## Authentication

- Supabase Auth
- Google OAuth
- GitHub OAuth

## AI

- Gemini

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <https://github.com/Satyam3245/Puplexity_clone-.git>
cd Puplexity_clone-
```

## Install Dependencies

### Frontend

```bash
cd frontend
bun install
```

### Backend

```bash
cd backend
bun install
```

---

# ⚙️ Environment Variables

```env
DATABASE_URL=

SUPABASE_URL=
TAVILY_API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GEMINI_API_KEY=
```

---

# 🗄️ Database

This project uses:

- Supabase PostgreSQL
- Prisma ORM
- Supabase Authentication

Generate Prisma Client:

```bash
bunx prisma generate
```

Run Migrations:

```bash
bunx prisma migrate dev
```

---

# ▶️ Run Application

Backend:

```bash
cd backend
bun run dev
```

Frontend:

```bash
cd frontend
bun run dev
```

---

# 🔐 Authentication Flow

```text
User
 │
 ▼
Google / GitHub OAuth
 │
 ▼
Supabase Auth
 │
 ▼
JWT Session
 │
 ▼
Protected API Routes
```

---

# 🤖 AI Workflow

```text
User Query
    │
    ▼
Frontend
    │
    ▼
Express.js API
    │
    ▼
Gemini
    │
    ▼
Generated Response
    │
    ▼
Stored in Supabase
    │
    ▼
Displayed to User
```

---

# 👨‍💻 Built With

- React
- Bun
- Express.js
- TypeScript
- Prisma
- Supabase
- Gemini
- Tailwind CSS
- Radix UI