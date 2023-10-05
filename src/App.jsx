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

  return (
    <div>
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
              onDelete={(id) => console.log(id) }
              />
            )
          }
        )}
      </div>
    </div>
  );
}

export default App;
