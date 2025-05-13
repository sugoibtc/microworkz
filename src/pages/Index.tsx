
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import OpenTasks from '@/components/OpenTasks';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <OpenTasks />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
