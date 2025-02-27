import { Link } from "react-router-dom";

function Modal({ close }) {
    return (
        <div className="overlay">
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={close}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <h5 className="title">Join Medium.</h5>

                    <div className="body">
                        <div className="modal_signopt">
                            <div>
                                {/* Google Icon */}
                            </div>
                            <div className="modal_signpt_text">Sign Up With Google</div>
                        </div>
                        <div className="modal_signopt">
                            <div>
                                {/* Facebook Icon */}
                            </div>
                            <div className="modal_signpt_text">Sign Up With Facebook</div>
                        </div>
                        <div className="modal_signopt">
                            <div>
                                {/* Email Icon */}
                            </div>
                            <div className="modal_signpt_text">Sign Up With Email</div>
                        </div>

                        <div className="modal_sign_in">
                            <span>
                                Already have an account? <Link to="/login">Sign in</Link>
                            </span>
                        </div>
                    </div>

                    <div className="modal_footer">
                        <span>
                            Click “Sign up” to agree to Medium’s <Link to="#">Terms of Service</Link> and
                            acknowledge that Medium’s <Link to="#">Privacy Policy</Link> applies to you.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
