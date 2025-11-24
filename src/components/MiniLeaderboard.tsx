import { Trophy, Medal, Award } from 'lucide-react';

const topStudents = [
  {
    rank: 1,
    name: "Priya Sharma",
    score: 2845,
    avatar: "PS",
    color: "from-yellow-400 to-yellow-600",
    icon: Trophy
  },
  {
    rank: 2,
    name: "Rahul Kumar",
    score: 2720,
    avatar: "RK",
    color: "from-gray-300 to-gray-500",
    icon: Medal
  },
  {
    rank: 3,
    name: "Ananya Singh",
    score: 2650,
    avatar: "AS",
    color: "from-orange-400 to-orange-600",
    icon: Award
  }
];

export default function MiniLeaderboard() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Performers This Week
          </h2>
          <p className="text-gray-600 text-lg">
            Join the best and compete with fellow aspirants
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-2xl p-8 shadow-lg">
          <div className="space-y-4">
            {topStudents.map((student, index) => {
              const Icon = student.icon;

              return (
                <div
                  key={student.rank}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${student.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                        {student.avatar}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${student.rank === 1 ? 'text-yellow-500' : student.rank === 2 ? 'text-gray-400' : 'text-orange-500'}`} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-gray-800">#{student.rank}</span>
                        <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>🎯 Score: <strong className="text-blue-600">{student.score}</strong></span>
                        <span>•</span>
                        <span>📚 150 questions completed</span>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div className={`px-4 py-2 bg-gradient-to-r ${student.color} rounded-lg text-white font-semibold`}>
                        Rank {student.rank}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">You're currently ranked #47 with 1,820 points</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Full Leaderboard
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-blue-800 mb-1">Weekly Challenge</div>
            <div className="text-blue-700">Complete 50 questions</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-yellow-800 mb-1">Speed Round</div>
            <div className="text-yellow-700">10 questions in 5 minutes</div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-blue-800 mb-1">Accuracy Test</div>
            <div className="text-blue-700">Score 90% or above</div>
          </div>
        </div>
      </div>
    </section>
  );
}
