import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import './Tweets.css';

function Tweets() {
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    fetch('/tweet/all')
      .then((d) => d.json())
      .then((response) => setTweets(response.tweets))
      .then(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <ReactLoading className="loading" type="spinningBubbles"></ReactLoading>
      ) : (
        <div id="tweets">
          {tweets.map((tweet) => (
            <div id="tweet" key={tweet._id}>
              <span>{tweet.username}</span>
              <p>{tweet.tweet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweets;
