
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
            <div className="terminal hover:border-primary/30 transition">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-ibm">Matrix Chat</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Join our Matrix rooms to discuss tasks, get help, and connect with the community.
                Our maintainers are active daily to answer questions.
              </p>
              <Button variant="outline" className="w-full font-mono">
                Join Matrix Chat
              </Button>
            </div>
            
            <div className="terminal hover:border-primary/30 transition">
              <div className="flex items-center mb-4">
                <Github className="h-6 w-6 text-primary mr-3" />
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
              Join ZenTaskr today and start completing microtasks to earn crypto rewards while 
              contributing to meaningful open source projects.
            </p>
            <Button size="lg" className="font-mono">Get Started Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
