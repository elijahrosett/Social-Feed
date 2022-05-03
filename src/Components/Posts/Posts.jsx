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
                   
                
            </tr>
        </div>

     );
}
 
export default Posts;