import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    console.log(name);
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='field'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type='submit' className='btn'>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
