import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>{comment.id}</div>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
        </div>
    );
};

export default Comment;