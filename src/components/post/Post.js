import React from 'react';

const Post = ({post, lift}) => {
    return (
        <div>

            <div>{post.id}</div>
            <div>{post.title}</div>
            <button onClick={()=>{
                lift(post);
            }}>details</button>
        </div>
    );
};

export default Post;