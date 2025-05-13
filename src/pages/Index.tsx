
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import OpenTasks from '@/components/OpenTasks';
import Community from '@/components/Community';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-darkbg">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <OpenTasks />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
