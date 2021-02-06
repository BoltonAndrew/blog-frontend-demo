import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = ({ user, setUser, home, profile }) => {
    return(
        <NavContainer>
            <Container>
                <LinkContainer to={home}>{'\u2302'}</LinkContainer>
                {!user && <Login setUser={setUser}/>}
                {user && <LinkContainer2 to={profile}>{user.user.name}</LinkContainer2>}
            </Container>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    height: 5vh;
    width: 100vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 4px 6px -6px;
`;

const Container = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const LinkContainer = styled(Link)`
    font-size: 6vh;
    padding-bottom: 7vh;
    position: relative;
    bottom: 2vh;
    color: #444444;
    text-decoration: none;
    &:hover {
        background-color: #F6F7F8;
    };
    &:active {
        color: #1877F2;
    };
`;

const LinkContainer2 = styled(Link)`
    font-size: 4vh;
    position: relative;
    bottom: 1vh;
    color: #444444;
    text-decoration: none;
    &:hover {
        background-color: #F6F7F8;
    };
    &:active {
        color: #1877F2;
    };
`;

export default Navbar