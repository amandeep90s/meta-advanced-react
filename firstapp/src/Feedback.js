import React, { useState } from 'react';

const App = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment explaining why the experience was poor.');
      return false;
    }
    setScore(10);
    setComment('');
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className='field'>
            <label htmlFor='score'>Score: {score}</label>
            <input
              type='range'
              name='score'
              id='score'
              min={1}
              max={10}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className='field'>
            <label htmlFor='comment'>Comment</label>
            <textarea
              name='comment'
              id='comment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type='submit' className='btn'>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
