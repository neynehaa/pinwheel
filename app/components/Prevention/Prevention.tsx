// components/PreventionSection.tsx
import React from 'react';
import Image from 'next/image';

const Prevention = () => {
  // Data for habit section
  const habitItems = [
    { id: 1, text: "Get an overview of Habit Calendars." },
    { id: 2, text: "Start building with Habitify platform" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Prevent failure from impacting your reputation
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Our platform helps you build secure onboarding authentication experiences that retain and engage your users. We build the infrastructure, you can.
            </p>
            
            {/* Habit section */}
            <div className="mb-10">
              <div className="text-lg font-medium text-gray-800 mb-4">
                Habit building essential choose habit
              </div>
              
              <div className="space-y-3 mb-6 pl-5">
                {habitItems.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-0.5">{item.id}.</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 my-6"></div>
              
              
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/sales-data-image.jpg"
                alt="Sales data visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;