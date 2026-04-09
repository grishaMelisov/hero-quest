import './App.css';
import DrumCard from './components/fortune/DrumCard';
import FortuneWheel from './components/fortune/FortuneWheel';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import QuestGrid from './components/quests/QuestGrid';
import type { DrumItem } from './types';

function App() {
  const item: DrumItem = {
    id: 'Drum',
    label: 'СКИДКА',
    value: '20%',
  };
  return (
    <>
      <div className='explore-shell overflow-hidden flex flex-col items-center justify-center min-h-screen'>
        <Header />
        <div className='overflow-hidden'>
          <FortuneWheel />
        </div>

        <QuestGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
