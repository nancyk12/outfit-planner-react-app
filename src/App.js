import React, { useState } from 'react';
import './App.css';
import clothing from './clothing';

const App = () => {
  const [outfit, setOutfit] = useState({});

  const generateOutfit = (dressCode) => {
    const filteredClothing = clothing.filter(item => item.dressCode === dressCode);
    const randomTop = getRandomItem(filteredClothing, 'top');
    const randomBottom = getRandomItem(filteredClothing, 'bottom');
    const randomShoes = getRandomItem(filteredClothing, 'shoes');

    setOutfit({
      top: randomTop,
      bottom: randomBottom,
      shoes: randomShoes,
    });
  };

  const getRandomItem = (items, type) => {
    const filteredItems = items.filter(item => item.type === type);
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    return filteredItems[randomIndex];
  };

  return (
    <div className="App">
      <h1>Outfit Planner</h1>
      <div className="buttons">
        <button onClick={() => generateOutfit('casual')}>Casual</button>
        <button onClick={() => generateOutfit('sport')}>Sport</button>
        <button onClick={() => generateOutfit('formal')}>Formal</button>
      </div>
      <div className="outfit">
        {outfit.top && (
          <div className="item">
            <img src={outfit.top.imageUrl} alt={outfit.top.description} />
            <p>{outfit.top.description}</p>
          </div>
        )}
        {outfit.bottom && (
          <div className="item">
            <img src={outfit.bottom.imageUrl} alt={outfit.bottom.description} />
            <p>{outfit.bottom.description}</p>
          </div>
        )}
        {outfit.shoes && (
          <div className="item">
            <img src={outfit.shoes.imageUrl} alt={outfit.shoes.description} />
            <p>{outfit.shoes.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
