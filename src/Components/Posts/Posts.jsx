// Each individual post and what it is made up of
const Posts = (props) => {
    return ( 
        <section className="container">
        <div className="card">
            <tr>
                <div className="bold">
                <td>{props.post.userName}</td>
                </div>
                <div>
                <p>
                <td>{props.post.message}</td>
                </p>
                </div>
              
                   
                
            </tr>
        </div>
        </section>
     );
}
 
export default Posts;