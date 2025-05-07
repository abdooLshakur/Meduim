import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const api = "https://meduimapi-kd3u.onrender.com";

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse the stored user data
        }
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <span className="logo">
                    <Link to={"/homepage"}>Medium</Link>
                </span>
                <input type="text" className="search-bar" placeholder="Search" />
            </div>
            <div className="nav-right">
                <Link to={"/writearticle"} className="write-btn">Write</Link>
                <span className="bell-icon">🔔</span>
                <div className="profile-container">
                    {user ? (
                        <img
                            src={`${api}/${user.avatar || "default-avatar.jpg"}`} // Use user's avatar or default image
                            alt="Profile"
                            className="profile-icon"
                            onClick={toggleDropdown}
                        />
                    ) : (
                        <Link to="/">
                            <button className="login-btn">Login</button>
                        </Link>
                    )}
                    {isDropdownOpen && user && (
                        <div className="dropdown-menu">
                            <Link to="/profile">Profile</Link>
                            <Link to="/articles">Library</Link>
                            <Link to="#">Stories</Link>
                            <Link to="#">Stats</Link>
                            <hr />
                            <Link to="#">Settings</Link>
                            <Link to="#">Refine recommendations</Link>
                            <Link to="#">Manage publications</Link>
                            <Link to="#">Help</Link>
                            <hr />
                            <Link to="#">Become a Medium member</Link>
                            <Link to="#">Apply for author verification</Link>
                            <Link to="#">Apply to the Partner Program</Link>
                            <Link to="#">Gift a membership</Link>
                            <hr />
                            <Link to="/" onClick={() => {
                                localStorage.removeItem("user");
                                setUser(null);
                            }}>Sign out</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
