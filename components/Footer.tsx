import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl text-white mb-4">Silverwood University</h3>
            <p className="text-sm text-gray-400 mb-6">
              Empowering students to find clarity in the mist since 1924.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-silverwood-gold cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-silverwood-gold cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-silverwood-gold cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-silverwood-gold cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-silverwood-gold">Admissions</a></li>
              <li><a href="#" className="hover:text-silverwood-gold">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-silverwood-gold">Campus Map</a></li>
              <li><a href="#" className="hover:text-silverwood-gold">Library Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-silverwood-gold shrink-0" />
                <span>100 University Dr,<br />Misty Harbor, OR 97365</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-silverwood-gold shrink-0" />
                <span>(503) 555-0199</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-silverwood-gold shrink-0" />
                <span>info@silverwood.edu</span>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Emergency</h4>
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-silverwood-gold">
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Campus Safety (24/7)</p>
              <p className="text-lg text-white font-bold">Ext. 5000</p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Health Center</p>
                <p className="text-sm text-white">Ext. 5002</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silverwood University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
