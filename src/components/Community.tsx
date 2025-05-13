
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, MessageSquare } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-ibm mb-2">Join the Community</h2>
          <p className="text-muted-foreground mb-12">Connect with other contributors and maintainers.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="terminal hover:border-quasar/30 transition">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-plasma mr-3" />
                <h3 className="text-xl font-ibm">Matrix Chat</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Join our Matrix room to discuss tasks, get help, and connect with the community.
                Our maintainers are active daily to answer questions.
              </p>
              <Button 
                variant="outline" 
                className="w-full font-mono"
                onClick={() => window.open("https://matrix.to/#/#sig-hyperqube:hc1.chat", "_blank")}
              >
                Join Matrix Chat
              </Button>
            </div>
            
            <div className="terminal hover:border-quasar/30 transition">
              <div className="flex items-center mb-4">
                <Github className="h-6 w-6 text-plasma mr-3" />
                <h3 className="text-xl font-ibm">GitHub Organization</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Explore our open source repositories, contribute to projects, and follow task-related 
                discussions and pull requests.
              </p>
              <Button variant="outline" className="w-full font-mono">
                View on GitHub
              </Button>
            </div>
          </div>
          
          <div className="mt-16 px-6 py-8 terminal text-center">
            <h3 className="text-xl font-ibm mb-4">Ready to start earning?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join MicroWorkz today and start completing microtasks to earn crypto rewards while 
              contributing to meaningful open source projects.
            </p>
            <Button size="lg" className="font-mono bg-quasar hover:bg-quasar/90">Start Building Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
