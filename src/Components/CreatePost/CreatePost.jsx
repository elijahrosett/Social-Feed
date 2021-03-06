// how to create a single post and save it
import React, { useState } from 'react';

const CreatePost = (props) => {

    const [userName, setUsername] = useState("")
    const [message, setMessage] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            userName: userName,
            message: message
        };
        console.log(newPost)
        props.newPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input type=" " value={userName} onChange={(event) =>setUsername(event.target.value) }/>
            <label>Message</label>
            <input type =" " value={message} onChange={(event) =>setMessage(event.target.value) } />
            <button type="submit">Post</button>
        </form>
     );
}
 
export default CreatePost;