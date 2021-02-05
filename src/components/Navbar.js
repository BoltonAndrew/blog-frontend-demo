import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = ({ user, setUser, home, profile }) => {
    return(
        <div>
            <Link to={home}>Home</Link>
            {user && <Link to={profile}>{user.name}</Link>}
            {!user && <Login setUser={setUser}/>}
        </div>
    )
}

export default Navbar