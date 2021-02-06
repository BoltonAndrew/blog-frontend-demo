import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Posts from '../components/Posts';

const Home = ({user, users, setTitle, setContent, posts}) => {
    return(
        <Container>
            {user && <Form user={user} setTitle={setTitle} setContent={setContent}/>}
            <Posts user={users} posts={posts}/>
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

export default Home