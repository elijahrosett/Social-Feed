// Each individual post and what it is made up of
const Posts = (props) => {
    return ( 
        <div className="card">
            <tr>
                <div className="bold">
                <td>{props.post.userName}</td>
                </div>
                <p>
                <td>{props.post.message}</td>
                </p>
                    <div>
                    <button>Like</button>
                    <button>Dislike</button>
                    </div>
                
            </tr>
        </div>

     );
}
 
export default Posts;