import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Posts = ({ user, users, posts }) => {
    return(
    <Container>
        {posts.map((post, index) => {
            return(
                <PostContainer key={index}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{moment.utc(post.createdAt).fromNow()}</p>
                </PostContainer>
            )
        })}
    </Container>
    )
}

const Container = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostContainer = styled.div`
    width: 40vw;
    box-shadow: 1px 1px 1px 1px;
    padding-left: 1vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
    border-radius: 10px;
    background-color: #FFFFFF
`;

export default Posts