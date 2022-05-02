// Each individual post and what it is made up of
const Posts = (props) => {
    return ( 
<table>
<thread>
    <tr>
        <th>User Name</th>
        <th>Message</th>
        </tr>
        <div>
        <button>Like</button>
        <button>Dislike</button>
        </div>
</thread>
<tbody>
    {props.post.map((post, index) => {
        return (
    <tr>
        <td>{post.userName}</td>
        <td>{post.message}</td>
    </tr>
    );
})}
</tbody>



</table>
     );
}
 
export default Posts;