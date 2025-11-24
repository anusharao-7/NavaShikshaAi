import { TrendingUp } from 'lucide-react';

const progressData = [
  {
    subject: 'Mathematics',
    progress: 75,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    subject: 'Mental Ability',
    progress: 60,
    color: 'yellow',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    subject: 'Language',
    progress: 85,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700'
  }
];

export default function ProgressPreview() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Progress
          </h2>
          <p className="text-gray-600 text-lg">
            See how you're improving in each subject
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Your Learning Dashboard</h3>
              <p className="text-gray-600">Overall completion: 73%</p>
            </div>
          </div>

          <div className="space-y-6">
            {progressData.map((item, index) => (
              <div
                key={item.subject}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{item.subject}</h4>
                  <span className="text-2xl font-bold text-gray-700">{item.progress}%</span>
                </div>

                <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1000 ease-out animate-progress-bar`}
                    style={{ width: `${item.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-shimmer"></div>
                  </div>
                </div>

                <div className="mt-3 flex gap-2 text-sm text-gray-600">
                  <span>🎯 {Math.floor((item.progress / 100) * 50)} topics completed</span>
                  <span>•</span>
                  <span>⭐ {Math.floor((item.progress / 100) * 200)} questions solved</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-1">24</div>
              <div className="text-sm text-gray-600">Study Streak</div>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-yellow-600 mb-1">450</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-1">12h</div>
              <div className="text-sm text-gray-600">Study Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
