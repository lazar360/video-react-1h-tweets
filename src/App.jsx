import { useState } from "react";
import { Tweet } from "./tweet";

const DEFAULT_TWEET = [
  {
    id:0,
    name:"Jean", 
    content:"Je vais bien", 
    like:1000
  },
  {
    id:1,
    name:"Christophe", 
    content:"Cool", 
    like:1000
  },
  {
    id:2,
    name:"Caroline", 
    content:"Cool", 
    like:1000
  },
]

function App() {
  const [tweets, setTweets] = useState (DEFAULT_TWEET);

  const onDelete = (tweetId) => {
    console.log('onDelete', tweetId);
    setTweets(curr => curr.filter(tweet => tweet.id !== tweetId));
  }

  return (
    <div>
      <form className="tweet-form">
        <h4>New tweet</h4>
        <input type="text" name="name"/>
        <input type="content" name="content"/>
        <input type="submit"/>
        
      </form>
      <div className="tweet-container">
        {tweets.map(
          (tweet) => {
            return (
              <Tweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              content={tweet.content}
              like={tweet.like}
              onDelete={(id) => onDelete(id) }
              />
            )
          }
        )}
      </div>
    </div>
  );
}

export default App;
