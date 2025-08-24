import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content */}
      <main className="px-6 md:px-12 lg:px-20 pt-20">
        {children}
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default MainLayout;
