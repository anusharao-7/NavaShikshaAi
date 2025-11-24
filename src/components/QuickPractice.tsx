import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const sampleQuestions = [
  {
    id: 1,
    question: "If 5 + 3 × 2 = ?",
    options: ["16", "11", "13", "10"],
    correct: 1
  },
  {
    id: 2,
    question: "Complete the series: 2, 4, 8, 16, __",
    options: ["20", "24", "32", "28"],
    correct: 2
  },
  {
    id: 3,
    question: "Synonym of 'HAPPY':",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correct: 1
  }
];

export default function QuickPractice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(optionIndex);
    setShowResult(true);

    if (optionIndex === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const question = sampleQuestions[currentQuestion];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Practice Widget
          </h2>
          <p className="text-gray-600 text-lg">
            Test your knowledge with instant feedback
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Score:</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                {score}/{sampleQuestions.length}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
              ></div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {question.question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;
                const showCorrect = showResult && isCorrect;
                const showWrong = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`
                      p-4 rounded-xl border-2 text-left font-medium transition-all transform hover:scale-105
                      ${showCorrect ? 'bg-green-100 border-green-500' : ''}
                      ${showWrong ? 'bg-red-100 border-red-500' : ''}
                      ${!showResult && !isSelected ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50' : ''}
                      ${!showResult && isSelected ? 'border-blue-500 bg-blue-50' : ''}
                      ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showResult && (
            <div className="flex items-center justify-between animate-fade-in">
              <div className={`font-semibold ${selectedAnswer === question.correct ? 'text-green-600' : 'text-red-600'}`}>
                {selectedAnswer === question.correct ? '✓ Correct! Well done!' : '✗ Incorrect. Keep practicing!'}
              </div>

              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {currentQuestion < sampleQuestions.length - 1 ? (
                  <>Next Question →</>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
