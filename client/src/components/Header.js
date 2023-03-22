import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="nav-section">
                <div className="studioandnavbtn">
                    <span className="studioname">
                        {/*<img src="/images/logostudio.svg"/>*/}
                    </span>

                </div>


                <nav className="top-nav">
                    <ul>

                        {isAuthenticated && (
                            <div id='user'>
                                <span>{userEmail}</span>
                                <li><Link className='navnames active' to="/">Home</Link></li>
                                <li><Link className='navnames' to="/gallery">Gallery</Link></li>
                                <li><Link className='navnames' to="/create">Create</Link></li>
                                <li><Link className='navnames' to="/logout">Logout</Link></li>
                            </div>
                        )}

                        {!isAuthenticated && (
                            <div id='guest'>
                                <li><Link className='navnames active' to="/">Home</Link></li>
                                <li><Link className='navnames' to="/gallery">Gallery</Link></li>
                                <li><Link className='navnames' to="/login">Login</Link></li>
                                <li><Link className='navnames' to="/register">Register</Link></li>
                            </div>
                        )}

                    </ul>
                </nav>
            </div>


        </header>
    );
}