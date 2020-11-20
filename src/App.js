import React, { useState } from "react";

import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // State
  const name = useState("Dev BigD");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  // const message = "Hubo";

  return (
    <div className="App">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;
