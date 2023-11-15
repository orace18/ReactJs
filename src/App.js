import React from 'react';
import NavigationBar from './NavigationBar';
import ThreeDAnimation from './Animation';
import "./style.css"
const App = () => {
  return (
    <div>
      <NavigationBar />
      {/* Le reste de votre contenu */}
      <section>
        <ThreeDAnimation/>
      </section>
    </div>
    
  );
};

export default App;
