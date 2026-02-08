import React from 'react';
import { HeartPulse, Watch, ShieldCheck, CheckCircle, Activity, Info } from 'lucide-react';

const HealthSafety: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <div className="bg-emerald-900 text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Student Health & Wellness</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Silverwood University is committed to the comprehensive well-being of every student. We provide state-of-the-art facilities and policies to support your biological and academic needs.
            </p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Urgent Care / Safe Lounges */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <ShieldCheck className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Safe Lounges</h2>
                <p className="text-gray-500">Accessible 24/7 across all major campus buildings.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Immediate Sanctuary When You Need It</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unexpected cycles happen. Our Safe Lounges are individual, soundproofed resting suites designed for immediate isolation and comfort. Each lounge is equipped with premium ventilation, a resting pod, and an automated dispenser for emergency suppressants.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm font-medium text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Bio-metric locked entry
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Direct line to Campus Health
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Located in Main Hall, Library, and Stadium
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-slate-800">Lounge Status</span>
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Main Hall A</span>
                      <span className="text-emerald-600 font-bold">VACANT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Main Hall B</span>
                      <span className="text-red-500 font-bold">OCCUPIED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Library West</span>
                      <span className="text-emerald-600 font-bold">VACANT</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-slate-900 text-white py-2 rounded font-bold text-sm hover:bg-slate-800">
                    Reserve via App
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Technology: HAZE */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                 <img src="https://picsum.photos/600/600?grayscale&blur=1" alt="Student using smartwatch" className="rounded-xl shadow-2xl" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Watch className="h-8 w-8 text-silverwood-gold mr-3" />
                  <h2 className="text-3xl font-serif font-bold text-slate-900">The Haze Integration</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Silverwood University partners with Haze™ to provide every student with a complimentary smart health monitor upon enrollment.
                </p>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-silverwood-green text-white">
                        <Activity className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Real-time Monitoring</h4>
                      <p className="mt-2 text-base text-gray-500">
                        Tracks hormone levels continuously. The device vibrates gently to warn of approaching fluctuations before they become symptomatic.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-silverwood-green text-white">
                        <HeartPulse className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Crisis Management</h4>
                      <p className="mt-2 text-base text-gray-500">
                        If levels spike critically, the watch automatically prompts to reserve the nearest Safe Lounge or alert medical staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Policy */}
          <section className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Cycle Attendance Policy (CAP)</h3>
                <p className="text-blue-800 mb-4">
                  We understand that biology is not a choice. Silverwood University enforces a strict "No Penalty" policy for cycle-related absences.
                </p>
                <ul className="list-disc list-inside text-sm text-blue-700 space-y-2">
                  <li>Absences are automatically excused when verified via the Haze app or Health Center.</li>
                  <li>Professors are required to provide recorded lectures for days missed due to Rut or Heat.</li>
                  <li>Extensions on assignments are guaranteed during verified cycle windows.</li>
                </ul>
              </div>
            </div>
          </section>

       </div>
    </div>
  );
};

export default HealthSafety;