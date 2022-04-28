import { useEffect, useState } from "react";
import "./Joke.css";

const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const FetchJoke = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);
      setJoke(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   FetchJoke();
  // }, []);

  const handleGetJoke = (e) => {
    FetchJoke();
  };
  return (
    <>
      {/* <h1>Jokes</h1> */}

      <button className="jokeBtn" onClick={handleGetJoke}>
        Get Another Joke
      </button>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {joke.setup ? <p>{joke.setup}</p> : <p>{joke.joke}</p>}
          </div>
          <div className="flip-card-back">
            {joke.delivery ? <p>{joke.delivery}</p> : <p>Funny, huh?</p>}
          </div>
        </div>
      </div>

      <p className="hint">(Hover over joke to see punchline)</p>
    </>
  );
};

export default Jokes;
