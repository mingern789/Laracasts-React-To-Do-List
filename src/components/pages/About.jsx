import React, { useState } from "react";
import Joke from "../Joke";
import Reddit from "../Reddit";

export default function About() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJokeVisible] = useState(false);
  return (
    <div className="container">
      <div className="buttons">
        <button
          onClick={() =>
            setRedditVisible((prevRedditVisible) => !redditVisible)
          }
        >
          Toggle Reddit
        </button>
        <button
          onClick={() => setJokeVisible((prevJokeVisible) => !jokeVisible)}
        >
          Toggle Joke
        </button>
      </div>
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
  );
}
