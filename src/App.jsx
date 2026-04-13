import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

// Pages
import { Home } from './pages/Home';
import { Residences } from './pages/Residences';
import { Amenities } from './pages/Amenities';
import { Gallery } from './pages/Gallery';
import { Availability } from './pages/Availability';
import { Location } from './pages/Location';
import { Contact } from './pages/Contact';

import { About } from './pages/About';
import { InvestorRelations } from './pages/InvestorRelations';
import { NewsUpdates } from './pages/NewsUpdates';
import { UnitDetails } from './pages/UnitDetails';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="font-body bg-[var(--color-background-light)] min-h-screen text-[var(--color-text-primary)]">
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="/residences/:unitId" element={<UnitDetails />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/location" element={<Location />} />
          <Route path="/investor" element={<InvestorRelations />} />
          <Route path="/news" element={<NewsUpdates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
