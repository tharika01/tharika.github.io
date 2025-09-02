import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Skills />
    </div>
  );
};

export default Home;