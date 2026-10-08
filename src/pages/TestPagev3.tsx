import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, AlertTriangle, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  generateMockQuestions,
  type Technology,
  type Difficulty,
  type TestResult,
} from "@/lib/questionUtils";

const TOTAL_TIME = 20 * 60;

const TestPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const technology = searchParams.get("tech") as Technology;
  const difficulty = searchParams.get("difficulty") as Difficulty;

  const [questions] = useState(() =>
    generateMockQuestions(technology, difficulty)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = useCallback(() => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });

    const result: TestResult = {
      technology,
      difficulty,
      totalQuestions: questions.length,
      correctAnswers: correct,
      wrongAnswers: questions.length - correct,
      scorePercentage: Math.round((correct / questions.length) * 100),
      answers,
      questions,
      timeTaken: TOTAL_TIME - timeLeft,
    };

    sessionStorage.setItem("testResult", JSON.stringify(result));
    navigate("/results");
  }, [answers, questions, technology, difficulty, timeLeft, navigate]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  const q = questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;
  const isLowTime = timeLeft < 300;

  return (
    <div className="min-h-screen pt-20 pb-8 bg-white dark:bg-[#0F172A] text-black dark:text-[#E2E8F0] transition">

      <div className="container mx-auto px-4 max-w-5xl">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">

          <div className="bg-gray-100 dark:bg-[#1E293B] border border-gray-200 dark:border-[#334155] p-4 rounded-xl w-full flex justify-between items-center">

            <div>
              <span className="text-sm text-gray-500 dark:text-[#94A3B8]">
                {technology}
              </span>
              <span className="mx-2">|</span>
              <span className="font-medium">{difficulty}</span>
            </div>

            <div className={`flex items-center gap-2 font-mono text-lg ${
              isLowTime ? "text-red-500" : ""
            }`}>
              <Clock className="h-4 w-4" />
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-3 rounded-xl bg-gray-200 dark:bg-[#1E293B]"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>{answeredCount}/{questions.length} answered</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid lg:grid-cols-[1fr_240px] gap-6">

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-100 dark:bg-[#1E293B] border border-gray-200 dark:border-[#334155] p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-6">
              {q.question}
            </h2>

            <div className="space-y-3">
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => setAnswers({ ...answers, [q.id]: idx })}
                  className={`w-full text-left p-4 rounded-xl border-2 transition ${
                    answers[q.id] === idx
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-gray-300 dark:border-[#334155] hover:border-indigo-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              >
                Previous
              </Button>

              <Button
                onClick={() =>
                  currentQuestion < questions.length - 1
                    ? setCurrentQuestion(currentQuestion + 1)
                    : setShowSubmitDialog(true)
                }
                className="bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
              </Button>
            </div>
          </motion.div>

          {/* Side Panel */}
          <div className="bg-gray-100 dark:bg-[#1E293B] border border-gray-200 dark:border-[#334155] p-4 rounded-xl">
            <h3 className="mb-3 font-semibold">Questions</h3>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuestion(i)}
                  className={`aspect-square rounded ${
                    i === currentQuestion
                      ? "bg-indigo-500 text-white"
                      : answers[questions[i].id] !== undefined
                      ? "bg-green-400 text-black"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              You answered {answeredCount}/{questions.length}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TestPage;