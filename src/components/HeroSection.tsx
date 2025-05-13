
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-muted text-muted-foreground text-xs">
          <span className="text-syrius">•</span> LAUNCHING ZOON
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-ibm leading-tight">
          The <span className="text-quasar glow-effect">fastest way</span> to earn <br className="hidden md:block" />while building <span className="text-syrius success-glow">open source</span>.
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Complete small, high-impact tasks and get paid instantly in ZNN, QSR, or stablecoins.
          No bureaucracy, just code.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="text-md font-mono py-6 px-8 bg-quasar hover:bg-quasar/90">
            Browse Tasks
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="outline" className="text-md font-mono py-6 px-8 border-syrius/30 hover:bg-syrius/10">
            Join the Community
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="h-1 w-1 rounded-full bg-syrius mr-2"></div>
            <span>Fast &amp; Feeless Transactions</span>
          </div>
          <div className="flex items-center">
            <div className="h-1 w-1 rounded-full bg-syrius mr-2"></div>
            <span>Instant Crypto Payments</span>
          </div>
          <div className="flex items-center">
            <div className="h-1 w-1 rounded-full bg-syrius mr-2"></div>
            <span>Built for Developers, by Developers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
