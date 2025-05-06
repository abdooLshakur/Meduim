import { Link } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/Modal.css";
import sideImage from "../images/4_SdjkdS98aKH76I8eD0_qjw.webp";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import "../css/Signup.css";

function LandingPage() {
    const [showSignupopt, setShowSignupopt] = useState(false);
    const [showLoginopt, setShowLoginopt] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const api = "https://meduimapi-kd3u.onrender.com";

    const openSignupModal = () => {
        setShowSignup(true);
        setShowLogin(false);
        setShowLoginopt(false);
    };

    const openLoginModal = () => {
        setShowLogin(true);
        setShowSignup(false);
        setShowSignupopt(false);

    };

    const openSignupoptModal = () => {
        setShowSignupopt(true);
        setShowLoginopt(false);
        setShowLogin(false);

    };

    const openLoginoptModal = () => {
        setShowLoginopt(true);
        setShowSignupopt(false);
        setShowSignup(false);

    };
    const closeModals = () => {
        setShowLogin(false);
        setShowSignup(false);
        setShowLoginopt(false);
        setShowSignupopt(false);
    };

    ;
                    // login
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(""); // Error state for incorrect login

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(""); // Clear previous error messages

        try {
            const response = await fetch(`${api}/api/blog/user-login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                alert("Login successful!");

                if (data && data.data) {
                    localStorage.setItem("user", JSON.stringify(data.data));
                }
                navigate("/homepage");
                setIsLoading(false);
            } else {
                setError(data.message || "Invalid email or password!");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("An error occurred. Please try again.");
        }
    };



                    // sign up
    const [signupData, setsignupData] = useState({
        full_name: "",
        email: "",
        bio: "",
        pronounce: "",
        avatar: null,
        password: ""
    });

    const handlesignupChange = (e) => {
        const { name, type, files, value } = e.target;
        setsignupData(prevState => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handlesignupSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formDataToSend = new FormData();
        Object.keys(signupData).forEach(key => {
            if (signupData[key]) {
                formDataToSend.append(key, signupData[key]);
            }
        });

        try {
            const response = await fetch(`${api}/api/blog/register-user`, {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                alert("Signup successful!");
                navigate(openLoginoptModal);
                setShowLogin(true)
                setIsLoading(false);
            } else {
                alert("Signup failed!");
            }
        } catch (error) {
            console.error("Error signing up:", error);
            alert("An error occurred. Please try again.");
        }
    };
    return (
        <div className="landing_container">
            <nav className="nav-wrapper">
                <div className="nav_logo">
                    <h3>Medium</h3>
                </div>
                <div className="Links_holder">
                    <div><Link to={"/homepage"}>Our Story</Link></div>
                    <div><Link to={"#"}>Membership</Link></div>
                    <div><Link to={"/createstory"}>Write</Link></div>
                    <div>
                        <button className="sign-btn" onClick={openLoginoptModal}>
                            Sign in
                        </button>
                    </div>
                    <div>
                        <button className="getstarted-btn" onClick={openSignupoptModal}>
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Login option Modal */}
            {showLoginopt && (
                <div className="overlay">
                    <div className="modalBackground">
                        <div className="modalContainer">
                            <div className="titleCloseBtn">
                                <button onClick={closeModals}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <h5 className="title">Sign in to Medium</h5>

                            <div className="body">
                                <div className="modal_signopt">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid">
                                        <path d="M255.93 133.52c0-11.01-.98-21.57-2.8-31.7H130.5v60h70.45c-3.04 16.29-12.23 30.07-26.14 39.27v32h42.4c24.8-22.84 39.12-56.55 39.12-99.57" fill="#4285F4" />
                                        <path d="M130.5 261c35.33 0 64.95-11.71 86.6-31.79l-42.4-32c-11.77 7.89-26.82 12.54-44.2 12.54-33.98 0-62.8-22.92-73.15-53.85H13.75v33.76C34.37 234.66 79.37 261 130.5 261" fill="#34A853" />
                                        <path d="M57.35 155.9c-2.76-8.19-4.34-16.9-4.34-25.9s1.58-17.71 4.34-25.9V70.34H13.75C5.04 87.14 0 108.02 0 130s5.04 42.86 13.75 59.66l43.6-33.76" fill="#FBBC05" />
                                        <path d="M130.5 51.13c19.19 0 36.38 6.61 49.94 19.6l37.43-37.43C195.45 12.16 165.83 0 130.5 0 79.37 0 34.37 26.34 13.75 70.34L57.35 104c10.35-30.93 39.17-53.85 73.15-53.85" fill="#EA4335" />
                                    </svg>
                                    <div className="modal_signpt_text">Sign in with Google</div>
                                </div>
                                <div className="modal_signopt">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M16 8.049c0-4.45-3.58-8.05-8-8.05S0 3.6 0 8.05C0 12.07 2.925 15.397 6.75 16v-5.62H4.71V8.05h2.04V6.275c0-2.016 1.207-3.132 3.055-3.132.885 0 1.812.157 1.812.157v1.98h-1.02c-1 0-1.31.62-1.31 1.255V8.05h2.23l-.357 2.33h-1.873V16C13.075 15.396 16 12.07 16 8.049z" />
                                    </svg>
                                    <div className="modal_signpt_text">Sign in with Facebook</div>
                                </div>
                                <button onClick={openLoginModal} className="modal_signopt">
                                    <div className="modal_signpt_text">{isLoading ? <span className="spinner"></span> : "Sign in With Email"}</div>
                                </button>
                                <div className="modal_sign_in">
                                    <span>
                                        Don't have an account?
                                        <button className="text-link" onClick={openSignupoptModal}>
                                            Sign up
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="modal_footer">
                                <span>
                                    By signing in, you agree to Medium’s <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {showLogin && (
                <div className="overlay">
                    <div className="modalBackground">
                        <div className="modalContainer">
                            <div className='titleCloseBtn'>
                                <button onClick={closeModals}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <h5 className="title">Welcome Back</h5>
                            <div className="body">
                                <form className="login-form" onSubmit={handleSubmit}>
                                    <div>
                                        <label>Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                                    </div>
                                    {error && <p className="error-message">{error}</p>}
                                    <div>
                                        <button className='login-btn' type="submit"disabled={isLoading}>{isLoading ? <span className="spinner"></span> : "Sign In"}</button>
                                    </div>
                                </form>
                                <div>
                                    <span>Don't have an account? <button className="text-link" onClick={openSignupoptModal} > Sign Up </button></span>
                                </div>
                            </div>
                            <div className="modal_footer">
                                <div>
                                    <span>Forgot password? <Link to="/reset">Reset here</Link>.</span><br />
                                    <span>By signing in, you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )};

            {/* Signup option Modal */}
            {showSignupopt && (
                <div className="overlay">
                    <div className="modalBackground">
                        <div className="modalContainer">
                            <div className="titleCloseBtn">
                                <button onClick={closeModals}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <h5 className="title">Join Medium</h5>

                            <div className="body">
                                <div className="modal_signopt">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid">
                                        <path d="M255.93 133.52c0-11.01-.98-21.57-2.8-31.7H130.5v60h70.45c-3.04 16.29-12.23 30.07-26.14 39.27v32h42.4c24.8-22.84 39.12-56.55 39.12-99.57" fill="#4285F4" />
                                        <path d="M130.5 261c35.33 0 64.95-11.71 86.6-31.79l-42.4-32c-11.77 7.89-26.82 12.54-44.2 12.54-33.98 0-62.8-22.92-73.15-53.85H13.75v33.76C34.37 234.66 79.37 261 130.5 261" fill="#34A853" />
                                        <path d="M57.35 155.9c-2.76-8.19-4.34-16.9-4.34-25.9s1.58-17.71 4.34-25.9V70.34H13.75C5.04 87.14 0 108.02 0 130s5.04 42.86 13.75 59.66l43.6-33.76" fill="#FBBC05" />
                                        <path d="M130.5 51.13c19.19 0 36.38 6.61 49.94 19.6l37.43-37.43C195.45 12.16 165.83 0 130.5 0 79.37 0 34.37 26.34 13.75 70.34L57.35 104c10.35-30.93 39.17-53.85 73.15-53.85" fill="#EA4335" />
                                    </svg>
                                    <div className="modal_signpt_text">Sign up with Google</div>
                                </div>
                                <div className="modal_signopt">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M16 8.049c0-4.45-3.58-8.05-8-8.05S0 3.6 0 8.05C0 12.07 2.925 15.397 6.75 16v-5.62H4.71V8.05h2.04V6.275c0-2.016 1.207-3.132 3.055-3.132.885 0 1.812.157 1.812.157v1.98h-1.02c-1 0-1.31.62-1.31 1.255V8.05h2.23l-.357 2.33h-1.873V16C13.075 15.396 16 12.07 16 8.049z" />
                                    </svg>
                                    <div className="modal_signpt_text">Sign up with Facebook</div>
                                </div>
                                <button onClick={openSignupModal} className="modal_signopt" disabled={isLoading}>
                                    <div className="modal_signpt_text"> {isLoading ? <span className="spinner"></span> : "Sign up With Email"}</div>
                                </button>
                                <div className="modal_sign_in">
                                    <span>
                                        Already have an account?
                                        <button className="text-link" onClick={openLoginoptModal}>
                                            Sign in
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="modal_footer">
                                <span>
                                    By signing up, you agree to Medium’s <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Signup Modal */}
            {showSignup && (
                <div className='overlay'>
                    <div className="modalBackground">
                        <div className="modalContainer">
                            <div className='titleCloseBtn'>
                                <button onClick={closeModals}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <h5 className="title">Join Medium.</h5>
                            <div className="body">
                                <div>
                                    <form className="signup-form" onSubmit={handlesignupSubmit}>
                                        <div><label>Full Name</label><input type="text" name="full_name" value={signupData.full_name} onChange={handlesignupChange} required /></div>
                                        <div><label>Email</label><input type="email" name="email" value={signupData.email} onChange={handlesignupChange} required /></div>
                                        <div><label>Bio</label><input type="text" name="bio" value={signupData.bio} onChange={handlesignupChange} /></div>
                                        <div><label>Pronounce</label><input type="text" name="pronounce" value={signupData.pronounce} onChange={handlesignupChange} /></div>
                                        <div><label>Avatar</label><input type="file" name="avatar" onChange={handlesignupChange} /></div>
                                        <div><label>Password</label><input type="password" name="password" value={signupData.password} onChange={handlesignupChange} required /></div>
                                        <div><button className='signup-btn' type="submit" disabled={isLoading}>{isLoading ? <span className="spinner"></span> : "Sign Up"}</button></div>
                                    </form>
                                    <div>
                                        <span>Already have an account? <button className="text-link" onClick={openLoginoptModal} >Sign In </button></span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal_footer">
                                <div>
                                    <span style={{ padding: "0 0 20px 0" }}>Forgot email or trouble signing in? <Link to="/help">Get help</Link>.</span><br />
                                    <span>Click “Sign in” to agree to Medium’s <Link to="/terms">Terms of Service</Link> and acknowledge that
                                        Medium’s <Link to="/privacy">Privacy Policy</Link> applies to you.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="Banner">
                <div className="Banner_holder">
                    <div className="Banner_text">
                        <div><h1>Human <br />stories & ideas</h1></div>
                        <div><p>A Place To Read Write And Brigthen Your Understanding</p></div>
                        <div><button className="landing-btn">Start reading</button></div>
                    </div>
                    <div className="side_image"><img src={sideImage} alt="" /></div>
                </div>
            </div>

            <hr className="hr" />

            <div className="Footer">
                <div><span>Help</span></div>
                <div><span>Status</span></div>
                <div><span>About</span></div>
                <div><span>Careers</span></div>
                <div><span>Press</span></div>
                <div><span>Blog</span></div>
                <div><span>Privacy</span></div>
                <div><span>Terms</span></div>
                <div><span>Text to Speech</span></div>
                <div><span>Teams</span></div>
            </div>



        </div>
    );
}

export default LandingPage;
