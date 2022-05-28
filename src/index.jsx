import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { jokes } from './jokes.js';
import { Joke } from './Joke';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            {jokes.map((joke) => (
              <Joke
                key={joke.name}
                userAvatar={joke.avatar}
                userName={joke.name}
                text={joke.text}
                likes={joke.likes}
                dislikes={joke.dislikes}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
