import React, { useState } from 'react';

const App = () => {
  const [greeting, setGreeting] = useState({
    greet: 'Hello',
    place: 'World',
  });

  const updateGreeting = () => {
    setGreeting((prevState) => {
      return { ...prevState, place: 'Universe' };
    });
  };

  return (
    <div>
      <h1>
        {greeting.greet}, {greeting.place}
      </h1>

      <button type='button' onClick={updateGreeting}>
        Update greeting
      </button>
    </div>
  );
};

export default App;
