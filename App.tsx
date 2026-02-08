import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CampusLife from './pages/CampusLife';
import HealthSafety from './pages/HealthSafety';
import Academics from './pages/Academics';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/health-safety" element={<HealthSafety />} />
            <Route path="/academics" element={<Academics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;