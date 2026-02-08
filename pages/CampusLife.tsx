import React from 'react';
import { Home, Coffee, Music, Users, Shield, Zap } from 'lucide-react';

const CampusLife: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-silverwood-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Campus Life</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From the serene Pine-Needle Path to the vibrant energy of the Silverwood Stadium, find your place in our community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Housing Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="flex items-center mb-8">
            <Home className="h-8 w-8 text-silverwood-green mr-4" />
            <h2 className="text-2xl font-serif font-bold text-slate-900">Residential Living</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/600/300?random=10" alt="Heritage Hall" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">The Heritage Hall</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience tradition in our oldest residence. Featuring classic stone architecture, high ceilings, and a deep sense of history. 
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Communal Lounges</li>
                  <li>• Proximity to North Wing</li>
                  <li>• Classic Double Rooms</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/600/300?random=11" alt="Neon Prism" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">The Neon Prism</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Modern living at its finest. Floor-to-ceiling glass walls offer immersive views of the surrounding forest and fog. 
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Apartment-style Living</li>
                  <li>• Smart-Glass Privacy Tinting</li>
                  <li>• In-building Gym</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dining & Social */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
             <div className="flex items-center mb-6">
              <Coffee className="h-6 w-6 text-silverwood-gold mr-3" />
              <h2 className="text-2xl font-serif font-bold text-slate-900">Dining: F.O.G.</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img src="https://picsum.photos/300/300?grayscale" alt="Coffee Shop" className="rounded-lg w-full md:w-1/3 object-cover" />
              <div>
                <p className="text-gray-600 mb-4">
                  Located right at the main gate, F.O.G. is more than just a cafe—it's the heartbeat of campus. Owned by a local alumnus, it's famous for its record collection and specialized menu.
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-bold text-silverwood-green mb-1">Signature Item: The Misty Latte</h4>
                  <p className="text-sm text-emerald-800">
                    A proprietary blend of espresso, steamed oat milk, and calming herbal infusions designed to promote hormonal balance during stress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Music className="h-6 w-6 text-silverwood-gold mr-3" />
              <h2 className="text-xl font-bold">Traditions</h2>
            </div>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-silverwood-gold">Friday Bonfires</h4>
                <p className="text-sm text-gray-400 mt-1">Black Sand Beach lights up every Friday. Open to all students.</p>
              </li>
              <li>
                <h4 className="font-bold text-silverwood-gold">The Fog Walk</h4>
                <p className="text-sm text-gray-400 mt-1">First-year orientation walk through Pine-Needle Path.</p>
              </li>
              <li>
                <h4 className="font-bold text-silverwood-gold">Stadium Lights</h4>
                <p className="text-sm text-gray-400 mt-1">When the stadium lights cut through the fog, you know the game is on.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Greek Life */}
        <section className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-silverwood-green mr-4" />
            <h2 className="text-2xl font-serif font-bold text-slate-900">Student Organizations & Greek Life</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-slate-900 pl-6 py-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg uppercase tracking-wider">Silver Hounds</h3>
                <span className="bg-slate-100 text-xs px-2 py-1 rounded">Fraternity</span>
              </div>
              <p className="text-gray-600 text-sm">
                Focused on athletic excellence and physical discipline. The Hounds house is located near the stadium, bordering the deep woods.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-900 pl-6 py-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg uppercase tracking-wider text-purple-900">Nightshade</h3>
                <span className="bg-slate-100 text-xs px-2 py-1 rounded">Sorority</span>
              </div>
              <p className="text-gray-600 text-sm">
                Celebrating individuality and expression. Their historic Victorian mansion by the lake is a hub for creative arts and social influence.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CampusLife;