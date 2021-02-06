import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Posts from '../components/Posts';

const MyProfile = ({user, setTitle, setContent, posts}) => {
    return(
        <Container>
            <Form user={user} setTitle={setTitle} setContent={setContent}/>
            <Posts user={user} posts={posts}/>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

export default MyProfile