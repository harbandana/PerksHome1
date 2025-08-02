import React from 'react';
import PerkCard from './components/PerkCard';
import { perks } from './data/perks';

const App = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Perks Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {perks.map(perk => (
          <PerkCard key={perk.id} perk={perk} />
        ))}
      </div>
    </div>
  );
};

export default App;