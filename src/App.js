import React, { useState } from 'react';
import Posts from './Components/Posts/Posts';
 



function App() {
  const [post, setPost] = useState([{userName: "Bob smith ", message: "Here is my post "}])





  return (
    <div>
      <Posts post={post} />



    </div>
  );
}

export default App;
