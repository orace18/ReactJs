import React, { useState } from 'react';
import './NavigationBar.css'; // Importez votre fichier CSS

const NavigationBar = () => {
  const [lang, setLang] = useState('fr'); // État de la langue, par défaut en français

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Orace</div>

      {/* Liens de navigation */}
      <ul className="nav-links">
        <li><a href="#contact">Contact</a></li>
        <li><a href="#langues">Langues</a></li>
        {/* Boutons pour changer de langue */}
        <li><button onClick={() => setLang('en')}>EN</button></li>
        <li><button onClick={() => setLang('fr')}>FR</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
