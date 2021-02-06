import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Posts from '../components/Posts';

const Home = ({user, users, setTitle, setContent, posts}) => {
    return(
        <div>
            {user && <Form user={user} setTitle={setTitle} setContent={setContent}/>}
            <Posts user={users} posts={posts}/>
        </div>
    )
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F6F7F8
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home