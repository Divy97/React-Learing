import React,{useState, useEffect} from 'react';
import Axios from 'axios';

const DataFetching = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPost(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return(
        <div>
            <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching;