import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../css/Modal.css";
import "../css/Signup.css";

function SignPage({ close }) {
    const [show, setshow] = useState(false)

    const openmodal = () => {
        setshow(!show)
    }
    const closemodal = () => setshow(false)
    const api = "http://localhost:5000";
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        bio: "",
        pronounce: "",
        avatar: null,
        password: ""
    });

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key]) {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch(`${api}/api/blog/register-user`, {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                alert("Signup successful!");
                navigate("/loginpage");
            } else {
                alert("Signup failed!");
            }
        } catch (error) {
            console.error("Error signing up:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="over">
            <div className='overlay'>
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className='titleCloseBtn'>
                            <button onClick={closemodal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <h5 className="title">Join Medium.</h5>
                        <div className="body">
                            <div>
                                <form className="signup-form" onSubmit={handleSubmit}>
                                    <div><label>Full Name</label><input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required /></div>
                                    <div><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
                                    <div><label>Bio</label><input type="text" name="bio" value={formData.bio} onChange={handleChange} /></div>
                                    <div><label>Pronounce</label><input type="text" name="pronounce" value={formData.pronounce} onChange={handleChange} /></div>
                                    <div><label>Avatar</label><input type="file" name="avatar" onChange={handleChange} /></div>
                                    <div><label>Password</label><input type="password" name="password" value={formData.password} onChange={handleChange} required /></div>
                                    <div><button className='signup-btn' type="submit">Sign Up</button></div>
                                </form>
                                <div>
                                    <span>Already have an account? <Link to="/signin">Sign in</Link></span>
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
        </div>
    );
}

export default SignPage;
