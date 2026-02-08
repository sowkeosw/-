import React from 'react';
import { ArrowRight, BookOpen, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Silverwood Campus in Fog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-silverwood-green/90 via-silverwood-green/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Find Your Path Through The Mist
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              Silverwood University offers a unique blend of historic tradition and modern innovation in the heart of Misty Harbor, Oregon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/academics" className="bg-silverwood-gold text-slate-900 px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Explore Programs
              </Link>
              <Link to="/campus-life" className="border-2 border-white text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors">
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Info Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
            <div className="p-4">
              <div className="text-4xl font-serif text-silverwood-green font-bold mb-2">12:1</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Student-Faculty Ratio</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-serif text-silverwood-green font-bold mb-2">85+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Majors & Minors</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-serif text-silverwood-green font-bold mb-2">98%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Employment Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-serif text-silverwood-green font-bold mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Cycle Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section: The Blend of Old and New */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold mb-6">
                Where History Meets Innovation
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From the ivy-covered brick of the North Wing to the crystalline glass of the Neon Prism residence, Silverwood embraces its duality. Our campus is a living testament to the harmony between our rich history and our progressive future.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-silverwood-green mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800">The Douglas House</h4>
                    <p className="text-sm text-gray-600">Our world-renowned glasshouse library, nestled in the heart of the pine forest.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-silverwood-green mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800">Black Sand Beach</h4>
                    <p className="text-sm text-gray-600">Just steps from the dorms, the perfect place for our traditional Friday bonfires.</p>
                  </div>
                </li>
              </ul>
              <Link to="/campus-life" className="inline-flex items-center text-silverwood-green font-bold hover:text-silverwood-gold transition-colors">
                Discover Campus Life <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Silverwood Library" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Campus Happenings</h2>
            <div className="w-20 h-1 bg-silverwood-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="group cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg relative">
                <img src="https://picsum.photos/600/400?random=2" alt="Bonfire" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-silverwood-gold text-slate-900 font-bold px-3 py-1 rounded text-xs">
                  FRI NIGHT
                </div>
              </div>
              <div className="border border-t-0 border-gray-200 p-6 rounded-b-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 group-hover:text-silverwood-green">Weekly Bonfire at Black Sand</h3>
                <p className="text-gray-500 text-sm mb-4">Join us this Friday for music, marshmallows, and community building by the ocean.</p>
                <span className="text-silverwood-green text-sm font-semibold flex items-center">
                  <Calendar className="h-4 w-4 mr-2" /> 8:00 PM - 11:00 PM
                </span>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg relative">
                <img src="https://picsum.photos/600/400?random=3" alt="Coffee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="border border-t-0 border-gray-200 p-6 rounded-b-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 group-hover:text-silverwood-green">F.O.G Seasonal Menu Launch</h3>
                <p className="text-gray-500 text-sm mb-4">The famous 'Misty Latte' is back with an enhanced stabilizing formula for exam season.</p>
                <span className="text-silverwood-green text-sm font-semibold flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> F.O.G Cafe
                </span>
              </div>
            </div>

            {/* Event 3 */}
            <div className="group cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg relative">
                <img src="https://picsum.photos/600/400?random=4" alt="Lab" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-silverwood-green text-white font-bold px-3 py-1 rounded text-xs">
                  ACADEMIC
                </div>
              </div>
              <div className="border border-t-0 border-gray-200 p-6 rounded-b-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 group-hover:text-silverwood-green">Chemistry Symposium</h3>
                <p className="text-gray-500 text-sm mb-4">Guest lectures on modern suppressant efficacy and pheromone synthesis.</p>
                <span className="text-silverwood-green text-sm font-semibold flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> North Wing Hall A
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;