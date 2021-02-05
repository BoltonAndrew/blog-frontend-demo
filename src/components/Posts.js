import React from 'react';

const Posts = ({ user, posts }) => {
    return(
    <div>
        {posts.map((post, index) => {
            return(
                <div key={index}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{post.createdAt}</p>
                </div>
            )
        })}
    </div>
    )
}

export default Posts