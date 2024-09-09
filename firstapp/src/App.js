import React from 'react';
import './index.css';

const topDesserts = [
  {
    id: '1',
    title: 'Chocolate Cake',
    description: 'A piece of chocolate cake',
    image: 'https://picsum.photos/200/300/?random',
    price: '$5.00',
  },
  {
    id: '2',
    title: 'Gulab Jamun',
    description: 'A piece of gulab jamun',
    image: 'https://picsum.photos/200/300/?random',
    price: '$3.00',
  },
  {
    id: '3',
    title: 'Protein Shake',
    description: 'A glass of protein shake',
    image: 'https://picsum.photos/200/300/?random',
    price: '$10.00',
  },
];

const App = () => {
  const listItems = topDesserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li key={dessert.id}>{itemText}</li>;
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default App;
