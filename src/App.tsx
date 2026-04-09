import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import QuestGrid from './components/quests/QuestGrid';

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Header />
        <QuestGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
