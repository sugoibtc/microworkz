
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xl font-bold font-ibm text-plasma">Micro</span>
                <span className="text-xl font-bold font-ibm">Workz</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The fastest way to earn while building open source.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
              <div>
                <h4 className="font-ibm font-medium mb-3">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#tasks" className="hover:text-foreground transition">Browse Tasks</a></li>
                  <li><a href="#how-it-works" className="hover:text-foreground transition">How It Works</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Creators & Maintainers</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-ibm font-medium mb-3">Community</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://matrix.to/#/#sig-hyperqube:hc1.chat" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Matrix Chat</a></li>
                  <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-ibm font-medium mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Developer API</a></li>
                  <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              © 2025 MicroWorkz. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="animate-pulse-slow inline-flex items-center">
                <span className="h-2 w-2 rounded-full bg-syrius mr-2"></span>
                Network Status: Online
              </span>
              <span>Built on Zenon Network</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
