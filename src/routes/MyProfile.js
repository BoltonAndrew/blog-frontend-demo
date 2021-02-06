import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Posts from '../components/Posts';

const MyProfile = ({user, setTitle, setContent, posts}) => {
    return(
        <div>
            <Form user={user} setTitle={setTitle} setContent={setContent}/>
            <Posts user={user} posts={posts}/>
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

export default MyProfile