import React from 'react';
import { BookOpen, FlaskConical, Mic2, Trophy } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl text-gray-400">Challenging minds in the heart of the Pacific Northwest.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Program 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <FlaskConical className="h-8 w-8 text-silverwood-green" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Chemical Sciences</h3>
            <p className="text-gray-600 mb-6">
              Housed in the North Wing, our chemistry department leads the nation in pheromone research and pharmaceutical development.
            </p>
            <a href="#" className="text-silverwood-green font-bold text-sm uppercase tracking-wide hover:underline">View Curriculum &rarr;</a>
          </div>

          {/* Program 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Mic2 className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Applied Music</h3>
            <p className="text-gray-600 mb-6">
              A vibrant program focusing on performance, composition, and audio engineering. State-of-the-art studios available 24/7.
            </p>
            <a href="#" className="text-silverwood-green font-bold text-sm uppercase tracking-wide hover:underline">View Curriculum &rarr;</a>
          </div>

          {/* Program 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Trophy className="h-8 w-8 text-yellow-700" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Sports Medicine</h3>
            <p className="text-gray-600 mb-6">
              Working directly with our championship baseball team, students gain hands-on experience in athletic physiology and recovery.
            </p>
            <a href="#" className="text-silverwood-green font-bold text-sm uppercase tracking-wide hover:underline">View Curriculum &rarr;</a>
          </div>

        </div>

        <div className="mt-20 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold mb-6">The Douglas House Library</h2>
              <p className="text-gray-600 mb-6 text-lg">
                More than just books, Douglas House is an architectural marvel. This 5-story glasshouse situated in the forest provides a serene, oxygen-rich environment perfect for studying.
              </p>
              <button className="self-start border-2 border-silverwood-green text-silverwood-green px-6 py-2 rounded font-bold hover:bg-silverwood-green hover:text-white transition-colors">
                Check Hours & Occupancy
              </button>
            </div>
            <div className="h-96 md:h-auto bg-gray-200 relative">
               <img src="https://picsum.photos/800/800?grayscale" alt="Library" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
