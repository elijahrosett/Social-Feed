import React, { useState } from 'react';
import Posts from './Components/Posts/Posts';
import CreatePost from './Components/CreatePost/CreatePost';



function App() {
  const [post, setPost] = useState([{userName: "Bob smith ", message: "Here is my post "}])





  return (
    <div>
      <Posts post={post} />
      <CreatePost />



    </div>
  );
}

export default App;
