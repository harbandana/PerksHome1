import React from 'react';

const PerkCard = ({ perk }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transform transition-transform hover:scale-105 hover:shadow-xl">
      <img src={perk.image} alt={perk.title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{perk.title}</h2>
      <p className="text-gray-600">{perk.description}</p>
    </div>
  );
};

export default PerkCard;