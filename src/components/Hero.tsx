import { BookOpen, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-slide-down">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">India's Smartest Exam Prep Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Master Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              Navodaya Entrance
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            AI-powered learning tailored for JNVST aspirants. Practice smarter, learn faster, and achieve your dreams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <BookOpen className="w-5 h-5" />
              Start Learning Free
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay-2">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-blue-600 text-3xl font-bold mb-2">10,000+</div>
            <div className="text-gray-600">Practice Questions</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-yellow-600 text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="text-blue-600 text-3xl font-bold mb-2">5,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl animate-float-delay"></div>
    </section>
  );
}
