import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <GraduationCap className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        Smart Learner
      </span>
    </div>
  );
}