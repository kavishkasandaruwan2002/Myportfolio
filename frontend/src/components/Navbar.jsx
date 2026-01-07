import React from 'react';
import NavigationHeader from './ui/navigation-menu-4';

// Wrapper passes theme props from App to the header
export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <NavigationHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}

