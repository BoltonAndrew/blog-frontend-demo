import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Login from './Login';
import { logout } from '../utils';

const Navbar = ({ user, setUser, home, profile, updateProfile }) => {
    return(
        <NavContainer>
            <LeftContainer>
                <LinkContainer to={home}>{'\u2302'} Home</LinkContainer>
            </LeftContainer>
            <MidContainer>
                {!user && <Login setUser={setUser}/>}
            </MidContainer>
            <RightContainer>
                {user && <LinkContainer2 to={profile}>{user.name}</LinkContainer2>}
                {user && <button onClick={(event) => logout(event, user, setUser)}>Logout</button>}
                {user && <LinkContainer3 to={updateProfile}>Update Profile</LinkContainer3>}
            </RightContainer>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    height: 6vh;
    width: 100vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 4px 6px -6px;
`;

const LeftContainer = styled.div`
    width: 25vw
`;

const MidContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const RightContainer = styled.div`
    width: 25vw
`;


const LinkContainer = styled(Link)`
    font-size: 6vh;
    height: 5vh;
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

const LinkContainer3 = styled(Link)`
    font-size: 2vh;
    position: relative;
    top: 1vh;
    color: #5890FF;
    text-decoration: none;
    &:hover {
        background-color: #F6F7F8;
    };
    &:active {
        color: #1877F2;
    };
`;

export default Navbar