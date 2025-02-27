import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);

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
                            src={`http://localhost:5000/${user.avatar || "default-avatar.jpg"}`} // Use user's avatar or default image
                            alt="Profile"
                            className="profile-icon"
                            onClick={toggleDropdown}
                        />
                    ) : (
                        <Link to="/login">
                            <button className="login-btn">Login</button>
                        </Link>
                    )}
                    {isDropdownOpen && user && (
                        <div className="dropdown-menu">
                            <Link to="/profile">Profile</Link>
                            <Link to="/articles">Library</Link>
                            <Link to="/stories">Stories</Link>
                            <Link to="/stats">Stats</Link>
                            <hr />
                            <Link to="/settings">Settings</Link>
                            <Link to="/recommendations">Refine recommendations</Link>
                            <Link to="/publications">Manage publications</Link>
                            <Link to="/help">Help</Link>
                            <hr />
                            <Link to="/membership">Become a Medium member</Link>
                            <Link to="/apply-author">Apply for author verification</Link>
                            <Link to="/partner-program">Apply to the Partner Program</Link>
                            <Link to="/gift-membership">Gift a membership</Link>
                            <hr />
                            <Link to="/logout" onClick={() => {
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
