import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './routes/Home';
import MyProfile from './routes/MyProfile';
import UpdateProfile from './routes/UpdateProfile';
import { fetchPosts, fetchUsers, checkToken } from './utils';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    checkToken(setUser);
    fetchPosts(setPosts);
    fetchUsers(setUsers);
  }, [])
  

  return (
    <Container>
      <Router>
      <Navbar user={user} setUser={setUser} home='/' profile='/myprofile' updateProfile='/updateprofile'/>
      <Switch>
        <Route exact path='/'>
          <Home user={user} users={users} posts={posts} setPosts={setPosts}/>
        </Route>
        <Route path='/myprofile'>
          <MyProfile user={user} posts={posts}/>
        </Route>
        <Route path='/updateprofile'>
          <UpdateProfile user={user} setUser={setUser}/>
        </Route>
      </Switch>
      </Router> 
      
    </Container>
  );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F6F7F8;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;
