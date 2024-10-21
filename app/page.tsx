import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import OurMenu from './Components/Menu'
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <AboutUs />
        <OurMenu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
