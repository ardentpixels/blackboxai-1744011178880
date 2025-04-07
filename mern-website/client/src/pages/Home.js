import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Team from '../components/Team';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="space-y-16">
      <HeroSection />
      <Features />
      <Team />
    </div>
  );
};

export default Home;