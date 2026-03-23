import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg1 from '@/assets/bg1.jpg';
import { technologies, type Technology, type Difficulty } from "@/lib/questionUtils";

const difficulties: { name: Difficulty; description: string; color: string }[] = [
  { name: "Beginner", description: "Fundamentals and basic concepts", color: "bg-success text-white" },
  { name: "Intermediate", description: "Applied knowledge and patterns", color: "bg-accent text-white" },
  { name: "Advanced", description: "Expert-level and architecture", color: "bg-destructive text-white" },
];

const SelectTechnology = () => {
  const navigate = useNavigate();
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const handleStart = () => {
    if (selectedTech && selectedDifficulty) {
      navigate(`/test?tech=${encodeURIComponent(selectedTech)}&difficulty=${selectedDifficulty}`);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute inset-0 bg-black/50 z-[-1]" />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            {/* Progress */}
            <div className="flex items-center gap-3 mb-8">
              <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-accent" : "bg-gray-700"}`} />
              <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-accent" : "bg-gray-700"}`} />
            </div>
    
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">Choose Your Technology</h1>
                  <p className="text-gray-200 mb-8">Select the technology you want to be tested on</p>
                  
                  <div className="mb-6 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedTech}
                      size="lg"
                      className="bg-[#06B6D4] text-white hover:bg-[#0891B2] rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
                    >
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        onClick={() => tech.status !== "coming-soon" && setSelectedTech(tech.name)}
                        className={`tech-card ${selectedTech === tech.name ? "selected" : ""} ${
                          tech.status === "coming-soon" ? "grayscale pointer-events-none" : ""
                        }`}
                        style={{ backgroundImage: tech.background }}
                      >
                        {tech.status === "coming-soon" && (
                          <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Coming Soon
                          </div>
                        )}
                        <span className="text-3xl mb-3 block">{tech.icon}</span>
                        <h3 className="font-display font-semibold mb-1 text-card-foreground">{tech.name}</h3>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    ))}
                  </div>
    
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedTech}
                      size="lg"
                      className="bg-[#06B6D4] text-white hover:bg-[#0891B2] rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
                    >
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
    
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="bg-gray-700/50 backdrop-blur-md p-8 rounded-xl shadow-lg">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-sm text-gray-200 hover:text-white mb-6 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                  <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">Select Difficulty</h1>
                  <p className="text-gray-200 mb-8">
                    Taking <span className="font-semibold text-white">{selectedTech}</span> test
                  </p>
    
                  <div className="grid gap-4 max-w-lg">
                    {difficulties.map((diff) => (
                      <div
                        key={diff.name}
                        onClick={() => setSelectedDifficulty(diff.name)}
                        className={`glass tech-card flex items-center gap-4 ${selectedDifficulty === diff.name ? "selected" : ""}`}
                      >
                        <div className={`px-4 py-2 rounded-full text-base font-semibold ${diff.color}`}>
                          {diff.name}
                        </div>
                        <p className={`text-base ${
  diff.name === "Beginner" ? "text-success" :
  diff.name === "Intermediate" ? "text-accent" :
  diff.name === "Advanced" ? "text-destructive" :
  "text-card-foreground"
}`}>
  {diff.description}
</p>
                      </div>
                    ))}
                  </div>
    
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleStart}
                      disabled={!selectedDifficulty}
                      size="lg"
                      className="bg-[#06B6D4] text-white hover:bg-[#0891B2] rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.4)]">
                      Start Test <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
  );
};

export default SelectTechnology;
