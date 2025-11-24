import { useState } from 'react';
import { BookOpen, Brain, Languages, Calculator, X } from 'lucide-react';

const topics = [
  {
    id: 1,
    title: 'Mathematics',
    icon: Calculator,
    color: 'blue',
    description: 'Master arithmetic, algebra, geometry, and data interpretation with AI-powered practice.',
    subtopics: ['Arithmetic', 'Algebra', 'Geometry', 'Data Interpretation']
  },
  {
    id: 2,
    title: 'Mental Ability',
    icon: Brain,
    color: 'yellow',
    description: 'Sharpen your logical reasoning, pattern recognition, and analytical thinking skills.',
    subtopics: ['Pattern Recognition', 'Logical Reasoning', 'Spatial Reasoning', 'Analytical Thinking']
  },
  {
    id: 3,
    title: 'Language',
    icon: Languages,
    color: 'blue',
    description: 'Improve vocabulary, grammar, comprehension, and communication skills.',
    subtopics: ['Vocabulary', 'Grammar', 'Comprehension', 'Writing Skills']
  }
];

export default function TopicNavigator() {
  const [selectedTopic, setSelectedTopic] = useState<typeof topics[0] | null>(null);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Topic Navigator
          </h2>
          <p className="text-gray-600 text-lg">
            Explore subjects designed specifically for Navodaya entrance exam success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const delay = index * 100;

            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-2xl p-8 transition-all transform hover:-translate-y-2 hover:shadow-2xl animate-scale-in"
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className={`w-16 h-16 bg-${topic.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${topic.color}-600`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {topic.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  Click to explore topics and start practicing
                </p>

                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore <span className="ml-2">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 animate-slide-up relative">
            <button
              onClick={() => setSelectedTopic(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              {(() => {
                const Icon = selectedTopic.icon;
                return (
                  <div className={`w-16 h-16 bg-${selectedTopic.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 text-${selectedTopic.color}-600`} />
                  </div>
                );
              })()}

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedTopic.title}
                </h3>
                <p className="text-gray-600">
                  {selectedTopic.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Topics Covered:</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedTopic.subtopics.map((subtopic, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{subtopic}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Start Learning {selectedTopic.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
