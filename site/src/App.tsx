import Navigation from './components/Navigation';
import ScrollIndicators from './components/ScrollIndicators';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <ScrollIndicators />
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
