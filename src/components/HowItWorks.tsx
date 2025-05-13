
import React from 'react';
import { Code, FileText, MessageSquare, CircleDollarSign } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover a task',
    description: 'Browse open microtasks ranging from bug fixes to feature implementations. Filter by tech stack, difficulty, or bounty amount.',
    icon: FileText,
    iconColor: 'text-plasma'
  },
  {
    number: '02',
    title: 'Claim it in Matrix or GitHub',
    description: 'Claim a task through our Matrix chat or directly on GitHub. This reserves the task for you to work on.',
    icon: MessageSquare,
    iconColor: 'text-quasar'
  },
  {
    number: '03',
    title: 'Submit code',
    description: 'Complete the task according to requirements and submit your solution via a pull request to the project repository.',
    icon: Code,
    iconColor: 'text-syrius'
  },
  {
    number: '04',
    title: 'Get paid in crypto',
    description: 'Once your PR is approved, receive instant payment in ZNN, QSR, or stablecoins directly to your wallet.',
    icon: CircleDollarSign,
    iconColor: 'text-plasma'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-ibm mb-2">How It Works</h2>
          <p className="text-muted-foreground mb-12">Simple, transparent, and efficient workflow for contributors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="terminal">
                <div className="flex items-center mb-4">
                  <span className="text-quasar font-bold text-xl">{step.number}</span>
                  <div className="h-[1px] flex-grow mx-3 bg-border"></div>
                </div>
                <div className="mb-4">
                  <step.icon size={24} className={step.iconColor} />
                </div>
                <h3 className="text-xl font-ibm font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 terminal">
            <div className="flex items-center mb-4">
              <div className="h-3 w-3 rounded-full bg-destructive mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-plasma mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-quasar"></div>
            </div>
            <div className="code-block font-mono space-y-2">
              <div className="flex">
                <span className="text-muted-foreground mr-4">$</span>
                <span>npm install -g microworkz-cli</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground mr-4">$</span>
                <span>microworkz login</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground mr-4">$</span>
                <span>microworkz claim task-123</span>
              </div>
              <div className="flex text-syrius">
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
