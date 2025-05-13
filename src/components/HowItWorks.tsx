
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Browse Available Tasks',
    description: 'Explore open microtasks from various open source projects. Filter by tech stack, difficulty, or bounty amount.'
  },
  {
    number: '02',
    title: 'Claim & Complete',
    description: 'Claim a task to work on it. Complete the work following the requirements and submit your solution via a pull request.'
  },
  {
    number: '03',
    title: 'Get Instant Payment',
    description: 'Once your PR is approved, payment is automatically sent to your wallet. No invoices, no waiting periods.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-ibm mb-2">How It Works</h2>
          <p className="text-muted-foreground mb-12">Simple, transparent, and efficient workflow for contributors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {steps.map((step) => (
              <div key={step.number} className="terminal">
                <div className="flex items-center mb-4">
                  <span className="text-primary font-bold text-xl">{step.number}</span>
                  <div className="h-[1px] flex-grow mx-3 bg-border"></div>
                </div>
                <h3 className="text-xl font-ibm font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 terminal">
            <div className="flex items-center mb-4">
              <div className="h-3 w-3 rounded-full bg-destructive mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-accent mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-primary"></div>
            </div>
            <div className="code-block font-mono space-y-2">
              <div className="flex">
                <span className="text-muted-foreground mr-4">$</span>
                <span>npm install -g zentaskr-cli</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground mr-4">$</span>
                <span>zentaskr login</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground mr-4">$</span>
                <span>zentaskr claim task-123</span>
              </div>
              <div className="flex text-accent">
                <span className="text-muted-foreground mr-4">&gt;</span>
                <span>Task claimed successfully! You have 48 hours to complete it.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
