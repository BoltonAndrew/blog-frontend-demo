import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = ({ user, setUser, home, profile }) => {
    return(
        <Container>
            <Link to={home}>Home</Link>
            {!user && <Login setUser={setUser}/>}
            {user && <Link to={profile}>My Profile</Link>}
        </Container>
    )
}

const Container = styled.div`
  height: 5vh;
  width: 100vw;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 4px 6px -6px;
`;

export default Navbar