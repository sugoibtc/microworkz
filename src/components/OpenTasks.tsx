
import React from 'react';
import { Button } from '@/components/ui/button';

// Placeholder tasks
const tasks = [
  {
    id: 'TASK-267',
    title: 'Pillar Status Dashboard',
    repo: 'zenon-network/syrius',
    difficulty: 'Medium',
    payment: '150 ZNN',
    estimatedTime: '4-8 hours',
    tags: ['react', 'typescript', 'api']
  },
  {
    id: 'TASK-268',
    title: 'Governance CLI Tool',
    repo: 'zenon-network/znn-cli',
    difficulty: 'Medium',
    payment: '100 ZNN',
    estimatedTime: '3-6 hours',
    tags: ['go', 'cli', 'testing']
  },
  {
    id: 'TASK-269',
    title: 'HQZ Contract Test Suite',
    repo: 'zenon-network/hyperqube',
    difficulty: 'Easy',
    payment: '80 ZNN',
    estimatedTime: '2-4 hours',
    tags: ['solidity', 'testing']
  }
];

const OpenTasks: React.FC = () => {
  return (
    <section id="tasks" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-ibm mb-2">Open Tasks</h2>
              <p className="text-muted-foreground">Start earning by completing these high-impact microtasks.</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 font-mono">
              View All Tasks
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div key={task.id} className="terminal group transition-all hover:border-quasar/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-ibm font-medium text-lg mb-1 group-hover:text-quasar transition-colors">
                      {task.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      {task.repo}
                    </div>
                  </div>
                  <div className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    {task.id}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {task.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-between items-center pt-3 border-t border-border">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full mr-2" 
                      style={{ 
                        backgroundColor: 
                          task.difficulty === 'Easy' ? '#19e321' : 
                          task.difficulty === 'Medium' ? '#FBBF24' : 
                          '#F91690' 
                      }}
                    ></div>
                    <span className="text-xs text-muted-foreground">{task.difficulty} • {task.estimatedTime}</span>
                  </div>
                  <div className="text-sm font-ibm text-plasma">{task.payment}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button className="font-mono bg-quasar hover:bg-quasar/90">Browse All Tasks</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenTasks;
