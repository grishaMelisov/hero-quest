import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
