// a collection of all posts that need to be displayed together
import React, { useState } from 'react';



const DisplayPosts = (props) => {

    const [likeButtonClass, setlikeButtonClass] = useState("inactive");
    const [dislikeButtonClass, setdislikeButtonClass] = useState('inactive2');

function handleClick(){
    if (likeButtonClass === "inactive"){
        setlikeButtonClass("active")
    }
    else{
        setlikeButtonClass("inactive")
    }
};
function handleClick2(){
    if (dislikeButtonClass === "dislikeInactive"){
        setdislikeButtonClass("dislikeActive")
    }
    else{
        setdislikeButtonClass("dislikeInactive")
    };
}
    return (
        <div className="card">
            <div className="card-body">
                {props.post.map((post) => {
                    return (
                        <div className="card">
                        <><><tr>
                            <td><p className='bold' >{post.userName}</p></td>
                        </tr><tr>
                                <td><p className='center'>{post.message} </p></td>
                            </tr></>  
                            <div>
                                <button className={likeButtonClass} onClick={handleClick}>Like</button>
                                <button className={dislikeButtonClass} onClick={handleClick2}>Dislike</button>
                            </div>
                    </>
                    </div> 
                    );
                })}
        </div>            
    </div>
)}

export default DisplayPosts;