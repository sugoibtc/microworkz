
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold font-ibm text-accent">Zen</span>
          <span className="text-xl font-bold font-ibm">Taskr</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#tasks" className="text-muted-foreground hover:text-foreground transition">Tasks</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition">How It Works</a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition">Community</a>
          <Button variant="outline" className="font-mono text-sm">Connect Wallet</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#tasks" className="text-muted-foreground py-2 hover:text-foreground transition" onClick={() => setIsMenuOpen(false)}>Tasks</a>
            <a href="#how-it-works" className="text-muted-foreground py-2 hover:text-foreground transition" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#community" className="text-muted-foreground py-2 hover:text-foreground transition" onClick={() => setIsMenuOpen(false)}>Community</a>
            <Button variant="outline" className="font-mono text-sm w-full">Connect Wallet</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
