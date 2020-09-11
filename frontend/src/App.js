import React, { useState } from 'react';

import Tweets from './Tweets';

import './App.css';

function createTweet(username, tweet) {
  fetch('http://localhost:1447/api/tweet/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, tweet }),
  });
}

function App() {
  const [username, setUsername] = useState(null);
  const [tweet, setTweet] = useState('');

  return (
    <div className="App">
      <form id="tweetForm" onSubmit={() => createTweet(username, tweet)}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          maxLength="16"
          minLength="3"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          id="tweetContent"
          placeholder="Tweet"
          maxLength="280"
          minLength="1"
          onChange={(e) => setTweet(e.target.value)}
        ></input>
        <span>{280 - tweet.length}</span>
        <input type="submit" value="Send"></input>
      </form>
      <Tweets></Tweets>
    </div>
  );
}

export default App;
