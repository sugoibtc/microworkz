
import React from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-xl font-ibm font-medium mb-3">{question}</h3>
    <div className="text-muted-foreground">{answer}</div>
  </div>
);

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-ibm mb-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-12">Everything you need to know about MicroWorkz.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="terminal">
              <FAQItem 
                question="What is ZNN/QSR?" 
                answer={
                  <>
                    <p className="mb-2">ZNN (Zenon) and QSR (Quasar) are the dual coins of the Zenon Network.</p>
                    <p>ZNN serves as the primary medium of exchange and store of value, while QSR fuels the network's 
                    computational resources and provides staking incentives for the Network of Momentum.</p>
                  </>
                }
              />
              
              <FAQItem 
                question="How are payouts handled?" 
                answer={
                  <>
                    <p>Payments are automatically handled by our smart contract system. Once your pull request is 
                    merged and approved by the project maintainer, tokens are automatically transferred to your 
                    registered wallet address without any middlemen or delays.</p>
                  </>
                }
              />
            </div>
            
            <div className="terminal">
              <FAQItem 
                question="Can I cash out to stables?" 
                answer={
                  <>
                    <p className="mb-2">Yes, you can receive payments in stablecoins instead of ZNN/QSR.</p>
                    <p>When claiming a task, you can select your preferred payout method. 
                    The platform supports USDC and DAI payments through integrated swap functionality.</p>
                  </>
                }
              />
              
              <FAQItem 
                question="How do I get started?" 
                answer={
                  <>
                    <p>Getting started is easy! Just connect your GitHub account, link your wallet address, 
                    and browse available tasks. Once you find a task that matches your skills, you can claim it 
                    and start working immediately. No applications or interviews needed.</p>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
