import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './routes/Home';
import MyProfile from './routes/MyProfile';
import { fetchPosts, fetchUsers } from './utils';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchPosts(setPosts);
    fetchUsers(setUsers);
  }, [])
  

  return (
    <Container>
      <Router>
      <Navbar user={user} setUser={setUser} home='/' profile='/myprofile'/>
      <Switch>
        <Route exact path='/'>
          <Home user={user} users={users} posts={posts}/>
        </Route>
        <Route path='/myprofile'>
          <MyProfile user={user} posts={posts}/>
        </Route>
      </Switch>
      </Router> 
      
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F6F7F8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
