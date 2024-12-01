import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600">
            Learn Smarter, Manage Better
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your school with our cutting-edge school management system. 
            Streamline operations, enhance learning experiences, and empower your staff.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity gap-2">
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 lg:mt-24">
          {[
            ['1M+', 'Active Students'],
            ['500+', 'Institutions'],
            ['98%', 'Satisfaction Rate'],
          ].map(([stat, label]) => (
            <div key={label} className="flex flex-col items-center justify-center">
              <dt className="text-4xl font-bold tracking-tight text-primary">{stat}</dt>
              <dd className="text-sm font-semibold leading-6 text-gray-600">{label}</dd>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}