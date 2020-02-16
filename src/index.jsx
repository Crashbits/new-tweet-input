import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [tweet, setTweet] = useState("")
  useEffect(() => {
    document.title = `${240 - tweet.length} character left.` 
  }, [tweet])
  return (
    <div>
      <textarea 
        type="text"  
        value={tweet} 
        placeholder="add tweet" 
        cols="30" 
        rows="10" 
        onChange={(e) => setTweet(e.target.value)}>
      </textarea>
      <button 
        disabled={tweet.length === 0 || tweet.length > 240}
        onClick={()=> console.log(tweet)}>
        Tweet
      </button>
    </div>

  )
}


const rootElement = document.getElementById("root");
ReactDOM.render(
  <App  />,
  rootElement
);
