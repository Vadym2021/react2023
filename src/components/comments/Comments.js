import React, {useState} from 'react';
import Comment from "../comment/Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(allComments => {
            setComments(allComments);
            //console.log('log')
        });

    return (
        <div>
            {
                //<Comment/>
                //comments.map(value => <div>{value.id}</div>)
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }

        </div>
    );
};

export default Comments;