import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Posts = ({ user, users, posts }) => {
    return(
    <div>
        {posts.map((post, index) => {
            return(
                <div key={index}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{moment.utc(post.createdAt).fromNow()}</p>
                </div>
            )
        })}
    </div>
    )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F6F7F8
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Posts