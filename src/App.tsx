import './App.css';
import DrumCard from './components/fortune/DrumCard';
import FortuneWheel from './components/fortune/FortuneWheel';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import QuestGrid from './components/quests/QuestGrid';
import QuestModal from './components/quests/QuestModal';
import type { DrumItem } from './types';

function App() {
  const item: DrumItem = {
    id: 'Drum',
    label: 'ПОПРОБУЙТЕ',
    value: '20%',
  };
  return (
    <>
      <div className='explore-shell overflow-hidden flex flex-col items-center justify-center min-h-screen'>
        <Header />
        <FortuneWheel />
        {/* <QuestModal isOpen={true} onClose={() => {}} item={item} /> */}
        <QuestGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
