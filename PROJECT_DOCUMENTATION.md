# Project Documentation: SkillsPark Test

## 1. Introduction

This document provides a comprehensive overview of the **SkillsPark Test** application, an AI-powered platform for assessing technical skills across various IT domains. The application is built with React, TypeScript, and Vite, featuring a modern, responsive UI using Tailwind CSS and shadcn/ui.

## 2. Core Features

- **AI-Powered Assessments**: The platform is designed to generate questions dynamically based on the user's chosen technology and difficulty level.
- **Multiple Technologies**: Users can select from a wide range of technologies, including:
  - Core Java
  - Python
  - Manual & Automation Testing
  - Selenium
  - SQL
  - Web Development (HTML, CSS, JavaScript, React)
- **Three Difficulty Levels**: Each technology offers tests for **Beginner**, **Intermediate**, and **Advanced** skill levels.
- **Timed Tests**: Assessments are designed to be completed within a specific timeframe, simulating a real-world testing environment.
- **Instant Results & Feedback**: Upon completion, users receive a detailed performance analysis, their score, and AI-generated feedback.
- **Password-Protected Admin Panel**: A dedicated route (`/admin`) allows for administrative oversight (currently placeholder).
- **Responsive Design**: The UI is fully responsive and optimized for both desktop and mobile devices.

## 3. Technical Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) for server state and React Context for global UI state.
- **Testing**: [Vitest](https://vitest.dev/) for unit and integration testing.
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 4. Project Structure

The codebase is organized into the following key directories:

```
/
├── public/           # Static assets (icons, images)
├── src/
│   ├── assets/       # Images and other static resources
│   ├── components/   # Reusable React components (UI elements, Navbar, etc.)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Core application logic and utilities
│   │   ├── questions/  # Question banks for each technology
│   │   └── utils.ts    # Main utility functions and type definitions
│   ├── pages/        # Top-level page components corresponding to routes
│   └── test/         # Vitest test files
├── .gitignore        # Git ignore file
├── index.html        # Main HTML entry point
├── package.json      # Project metadata and dependencies
└── vite.config.ts    # Vite configuration
```

## 5. Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (or another package manager like Yarn or pnpm)

### Installation & Local Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ramprasadsuthi/skillspark-test.git
    cd skillspark-test
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

### Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the application for production.
- `npm run test`: Runs the test suite using Vitest.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run deploy`: Builds and deploys the application to GitHub Pages.

## 6. How to Add New Questions

The application's questions are stored in dedicated files within the `src/lib/questions/` directory.

To add a new set of questions for a technology (e.g., "Go"):

1.  **Create a new question file**: Create `src/lib/questions/go.ts`.

2.  **Define the questions**: In `go.ts`, export a dictionary where keys are in the format `Go-Difficulty` and values are arrays of `Question` objects.

    ```typescript
    // src/lib/questions/go.ts
    import { Question } from "../questionUtils";

    export const goQuestions: Record<string, Question[]> = {
      "Go-Beginner": [
        {
          id: 1,
          question: "What is a goroutine?",
          options: ["A type of function", "A lightweight thread", "A data structure", "A compiler directive"],
          correctAnswer: 1,
          explanation: "Goroutines are lightweight threads managed by the Go runtime.",
          type: "mcq",
        },
        // ...more beginner questions
      ],
      "Go-Intermediate": [
        // ...intermediate questions
      ],
    };
    ```

3.  **Register the new questions**:
    - Open `src/lib/questions/index.ts`.
    - Import and export the new question set.

    ```typescript
    // src/lib/questions/index.ts
    export * from "./java";
    export * from "./python";
    export * from "./go"; // Add this line
    ```

4.  **Add the technology to the main list**:
    - Open `src/lib/questionUtils.ts`.
    - Add "Go" to the `Technology` type and to the `technologies` array.

    ```typescript
    // src/lib/questionUtils.ts
    export type Technology = "Core Java" | "Python" | "Go"; // Add "Go"

    export const technologies = [
      // ...other technologies
      {
        name: "Go",
        icon: "🐹",
        description: "Concurrency, systems programming, and performance",
        background: "linear-gradient(...)",
      },
    ];
    ```

The new technology and its questions will now be available in the application.
