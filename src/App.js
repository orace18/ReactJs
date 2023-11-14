import React from 'react';
import NavigationBar from './NavigationBar';
import MedicalLayout from './Medical';

const App = () => {
  return (
    <div>
      <NavigationBar />
      {/* Le reste de votre contenu */}
      <section>
        <MedicalLayout/>
      </section>
    </div>
    
  );
};

export default App;
