import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../css/Modal.css";
import "../css/Login.css";

function LoginPage({ close }) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const api = "http://localhost:5000";
    
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

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
            } else {
                setError(data.message || "Invalid email or password!"); 
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("An error occurred. Please try again.");
        }
    };
    

    return (
        <div className="over">
            <div className="overlay">
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className='titleCloseBtn'>
                            <button onClick={closeModal}>
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
                                    <button className='login-btn' type="submit">Sign In</button>
                                </div>
                            </form>
                            <div>
                                <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
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
        </div>
    );
}

export default LoginPage;
