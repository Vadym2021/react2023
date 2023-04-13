import React, {useEffect, useState} from 'react';
import Post from "../post/Post";


const Posts = ({lift}) => {

    let [Posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
                //console.log('log')
            });
    }, []);


    return (
        <div>
            {
                //<Comment/>
                //comments.map(value => <div>{value.id}</div>)
                Posts.map(post => <Post post={post} lift={lift} key={post.id}/>)
            }

        </div>
    );
};

export default Posts;