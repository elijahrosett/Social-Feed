// a collection of all posts that need to be displayed together
import React, { useState } from 'react';



const DisplayPosts = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive")

function handleClick(){
    if (buttonClass === "inactive"){
        setButtonClass("active")
    }
    else{
        setButtonClass("inactive")
    }
}
    return (
        <div className="card">
            <table>
                {props.post.map((post, index) => {
                    return (
                        <><><tr>
                            <td>{post.userName}</td>
                        </tr><tr>
                                <td>{post.message}</td>

                            </tr></>
                            
                        </>
                    );
                })}
            </table>
                    
    </div>
)}

export default DisplayPosts;