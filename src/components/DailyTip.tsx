import { useState } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';

const studyTips = [
  {
    id: 1,
    tip: "Practice mental math daily for 15 minutes to improve calculation speed.",
    category: "Mathematics"
  },
  {
    id: 2,
    tip: "Solve puzzles and pattern recognition questions before breakfast to boost your brain.",
    category: "Mental Ability"
  },
  {
    id: 3,
    tip: "Read one English newspaper article daily to improve comprehension skills.",
    category: "Language"
  },
  {
    id: 4,
    tip: "Create mind maps for each topic to better understand connections between concepts.",
    category: "Study Strategy"
  },
  {
    id: 5,
    tip: "Take a 10-minute break after every 45 minutes of study to maintain focus.",
    category: "Productivity"
  }
];

export default function DailyTip() {
  const [currentTip, setCurrentTip] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTip = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTip((prev) => (prev + 1) % studyTips.length);
      setIsAnimating(false);
    }, 300);
  };

  const tip = studyTips[currentTip];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Daily Study Tip
          </h2>
          <p className="text-gray-600 text-lg">
            Expert advice to supercharge your preparation
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full -ml-20 -mb-20 opacity-50"></div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center animate-pulse-slow">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>

              <div>
                <div className="text-sm font-semibold text-yellow-600 mb-1">
                  TIP #{tip.id} • {tip.category}
                </div>
                <div className="text-xs text-gray-500">
                  Tip {currentTip + 1} of {studyTips.length}
                </div>
              </div>
            </div>

            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              <p className="text-2xl font-medium text-gray-900 leading-relaxed mb-6">
                {tip.tip}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {studyTips.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTip ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>

              <button
                onClick={nextTip}
                disabled={isAnimating}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isAnimating ? 'animate-spin' : ''}`} />
                Next Tip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
