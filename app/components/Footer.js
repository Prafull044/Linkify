import React from "react";

const Footer = () => (
  <footer className="fixed bottom-0  left-0 w-full bg-purple-700 text-white text-center py-3 shadow-lg z-50">
    <div>
      &copy; {new Date().getFullYear()} Linkify. All rights reserved.
    </div>
  </footer>
);

export default Footer;