import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Methodology />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
