import Header from './components/Header';
import Hero from './components/Hero';
import TopicNavigator from './components/TopicNavigator';
import QuickPractice from './components/QuickPractice';
import ProgressPreview from './components/ProgressPreview';
import DailyTip from './components/DailyTip';
import MiniLeaderboard from './components/MiniLeaderboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TopicNavigator />
      <QuickPractice />
      <ProgressPreview />
      <DailyTip />
      <MiniLeaderboard />
      <Footer />
    </div>
  );
}

export default App;
