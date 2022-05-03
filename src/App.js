import React, { useState } from 'react';
import Posts from './Components/Posts/Posts';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"



function App() {
  const [post, setPost] = useState([{userName: "", message: "", buttonClass: ""}])

function addNewPost(newPost){
  let tempPost = [...post, newPost];
  setPost(tempPost);
}



  return (
    <div className="container-fluid"> 
      <div>
       <Posts post={post} />
      </div>
      <div className='border-box'>
          <CreatePost newPost={addNewPost} />
      </div >
        <div className='border-box'>
        <DisplayPosts post={post} />
        </div>
        

    
      



    </div>
  );
}

export default App;
