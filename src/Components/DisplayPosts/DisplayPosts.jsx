// a collection of all posts that need to be displayed together
import React, { useState } from 'react';



const DisplayPosts = (props) => {

    const [likeButtonClass, setlikeButtonClass] = useState("inactive");
    const [dislikeButtonClass, setdislikeButtonClass] = useState('inactive2');

function handleClick(){
    if (likeButtonClass === "inactive" && dislikeButtonClass === "active2"){
        setlikeButtonClass("active");
        setdislikeButtonClass("inactive2");
    }
    else if (likeButtonClass === "inactive"){
        setlikeButtonClass("active")
    } 
    else{
        setlikeButtonClass("inactive")
    }
};
function handleClick2(){
    if (dislikeButtonClass === "inactive2" && likeButtonClass === 'active'){
        setdislikeButtonClass("active2")
        setlikeButtonClass("inactive")
    }
    else if (dislikeButtonClass === "inactive2"){
        setdislikeButtonClass("active2")
    }
    else{
        setdislikeButtonClass("inactive2")
    };
}
    return (
        <section>
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
    </section>
)}

export default DisplayPosts;