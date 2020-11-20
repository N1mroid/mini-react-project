import React from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  // Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        rows="5"
        cols="50"
      ></textarea>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
