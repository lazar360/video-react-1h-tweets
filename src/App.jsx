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

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet])
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newTweet = {
      id: (typeof tweets !== 'undefined' && tweets.length !== 0 ? tweets[tweets.length - 1].id + 1 : 0),
      name: (event.target.name.value),
      content: (event.target.content.value),
      like:0
    }

    addTweet(newTweet);
  }

  const onLike = (tweetId) => {
      setTweets((curr) => {
        
        const copyTweet = [...curr];

        const likedTweet = copyTweet.find((tweet)=> tweet.id === tweetId);
        likedTweet.like +=1;
        
        return copyTweet;
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New tweet</h4>
        <input placeholder="name" type="text" name="name"/>
        <input placeholder="content" type="content" name="content"/>
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
              onLike={(id) => {onLike(id)}}
              />
            )
          }
        )}
      </div>
    </div>
  );
}

export default App;
