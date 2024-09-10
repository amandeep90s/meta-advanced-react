import React, { useState } from 'react';

const App = () => {
  const [restaurantName, setRestaurantName] = useState('Lemon');

  return (
    <div>
      <h1>{restaurantName}</h1>

      <button
        type='button'
        onClick={() => setRestaurantName('Little Lemon Hotel')}
      >
        Update Restaurant Name
      </button>
    </div>
  );
};

export default App;
