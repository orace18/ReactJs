import React from 'react';
import './MedicalLayout.css'; // Assurez-vous d'avoir votre fichier CSS

const MedicalLayout = () => {
  return (
    <div className="medical-layout">
      <div className="patient">
        <span role="img" aria-label="Patient">👨‍⚕️</span>
      </div>
      <div className="ai">
        <span role="img" aria-label="AI">🤖</span>
      </div>
    </div>
  );
};

export default MedicalLayout;
