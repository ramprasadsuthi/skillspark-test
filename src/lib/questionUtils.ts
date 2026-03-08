import { javaQuestions, pythonQuestions, manualTestingQuestions, automation_testingQuestions, seleniumQuestions } from "./questions";

export type Technology =
  | "Core Java"
  | "Python"
  | "Manual Testing"
  | "Automation Testing"
  | "Selenium"
  | "SQL"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "React";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  type: "mcq" | "scenario" | "conceptual";
}

export interface TestResult {
  technology: Technology;
  difficulty: Difficulty;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  scorePercentage: number;
  answers: Record<number, number>;
  questions: Question[];
  timeTaken: number;
}

export const technologies: { name: Technology; icon: string; description: string; background: string; status?: "ready" | "coming-soon" }[] = [
  {
    name: "Core Java",
    icon: "☕",
    description: "Object-oriented programming, JVM, collections, and more",
    background: "linear-gradient(to right, #e0f2f7, #c1e4ee)",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Scripting, data structures, OOP, and libraries",
    background: "linear-gradient(to right, #d4edda, #c0e0c0)",
  },
  {
    name: "Manual Testing",
    icon: "🔍",
    description: "Test cases, bug lifecycle, SDLC, and methodologies",
    background: "linear-gradient(to right, #ffe0b2, #ffd599)",
  },
  {
    name: "Automation Testing",
    icon: "🤖",
    description: "Frameworks, CI/CD, test automation strategies",
    background: "linear-gradient(to right, #ffcdd2, #ffb3b3)",
  },
  {
    name: "Selenium",
    icon: "🌐",
    description: "WebDriver, locators, waits, and frameworks",
    background: "linear-gradient(to right, #e1bee7, #d0a7db)",
  },
  {
    name: "SQL",
    icon: "🗄️",
    description: "Queries, joins, normalization, and optimization",
    background: "linear-gradient(to right, #c8e6c9, #aed581)",
    status: "coming-soon",
  },
  {
    name: "HTML",
    icon: "📄",
    description: "Elements, forms, semantics, and accessibility",
    background: "linear-gradient(to right, #bbdefb, #90caf9)",
    status: "coming-soon",
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "Layouts, flexbox, grid, animations, and responsive design",
    background: "linear-gradient(to right, #ffecb3, #ffe082)",
    status: "coming-soon",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "ES6+, DOM, async programming, and closures",
    background: "linear-gradient(to right, #b2dfdb, #80cbc4)",
    status: "coming-soon",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Components, hooks, state management, and routing",
    background: "linear-gradient(to right, #cfd8dc, #b0bec5)",
    status: "coming-soon",
  },
];

// Mock question bank - in production these would come from AI
const questionBanks: Record<string, Question[]> = {
  ...javaQuestions,
  ...pythonQuestions,
  ...manualTestingQuestions,
  ...automation_testingQuestions,
  ...seleniumQuestions,
};

// Generate questions for any tech/difficulty combo by reusing and adapting the bank
export function generateMockQuestions(technology: Technology, difficulty: Difficulty): Question[] {
  const key = `${technology}-${difficulty}`;
  const questionPool = questionBanks[key];

  if (questionPool && questionPool.length > 0) {
    // Shuffle the array using Fisher-Yates algorithm
    const shuffled = [...questionPool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Return the first 20 questions, or all if there are fewer than 20
    return shuffled.slice(0, 20);
  }

  // Fallback: generate generic questions for the technology
  const questions: Question[] = [];
  for (let i = 1; i <= 20; i++) {
    const types: Question["type"][] = ["mcq", "scenario", "conceptual"];
    const type = types[i % 3];
    questions.push({
      id: i,
      question: `${difficulty} ${technology} Question ${i}: What is a key concept related to ${technology} at the ${difficulty.toLowerCase()} level?`,
      options: [
        `Correct answer for ${technology} Q${i}`,
        `Distractor option A for Q${i}`,
        `Distractor option B for Q${i}`,
        `Distractor option C for Q${i}`,
      ],
      correctAnswer: 0,
      explanation: `This tests your understanding of ${technology} at the ${difficulty.toLowerCase()} level. The correct answer demonstrates fundamental knowledge required for this topic.`,
      type,
    });
  }
  return questions;
}

export function getPerformanceLevel(score: number): { level: string; color: string } {
  if (score >= 80) return { level: "Excellent", color: "text-success" };
  if (score >= 60) return { level: "Good", color: "text-accent" };
  return { level: "Needs Improvement", color: "text-destructive" };
}

export function generateFeedback(result: TestResult): string {
  const { technology, scorePercentage, difficulty } = result;
  if (scorePercentage >= 90) {
    return `Outstanding performance! You demonstrate expert-level knowledge in ${technology} at the ${difficulty} level. You have a strong grasp of both theoretical concepts and practical applications.`;
  }
  if (scorePercentage >= 70) {
    return `Good job! You have a solid foundation in ${technology}. To reach the next level, focus on the questions you missed and review the explanations provided. Consider practicing more ${difficulty.toLowerCase()}-level scenarios.`;
  }
  if (scorePercentage >= 50) {
    return `You have a basic understanding of ${technology}, but there's room for improvement. Review the core concepts and practice with more examples. Consider starting with a lower difficulty level to build stronger foundations.`;
  }
  return `You need more practice with ${technology}. We recommend reviewing the fundamentals and studying the explanations for each question. Start with beginner-level resources and gradually work your way up.`;
}