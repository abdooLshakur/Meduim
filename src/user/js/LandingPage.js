import { Link } from "react-router-dom";
import sideImage from "../images/4_SdjkdS98aKH76I8eD0_qjw.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/Modal.css"
import { useState } from "react";
function LandingPage() {
    const [showsignup, setshowsignup] = useState(false)
    const [showlogin, setshowlogin] = useState(false)

    const openmodal = () => { setshowsignup(!showsignup) }
    const openlogin = () => { setshowlogin(!showlogin) }
    if (openlogin === true) {
        closemodal(true)
    }
    const closemodal = () => setshowsignup(false)
    const closelogin = () => setshowlogin(false)
    return (
        < div className="landing_container">
            <nav className="nav-wrapper">
                <div className="nav_logo">
                    <div><h3>Medium</h3></div>
                </div>
                <div className="Links_holder">
                    <div><Link to={"/homepage"}>Our Story</Link></div>
                    <div><Link to={"#"}>Membership</Link></div>
                    <div><Link to={"/createstory"}>Write</Link></div>


                    {/* login */}
                    <div >
                        <button type="button" className="sign-btn" data-toggle="modal" data-target="#exampleModalLong" onClick={openlogin}>Sign in</button>
                        {showlogin && (


                            <div className='overlay'>

                                <div className="modalBackground">

                                    <div className="modalContainer">
                                        <div className='titleCloseBtn'>
                                            <button onClick={closelogin}>
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <h5 className="title" >Join Medium.</h5>


                                        <div class="body">
                                            <div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><g id="google"><g id="google-vector" fill-rule="evenodd" clip-rule="evenodd"><path id="Shape" fill="#4285F4" d="M20.64 12.205q-.002-.957-.164-1.84H12v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615"></path><path id="Shape_2" fill="#34A853" d="M12 21c2.43 0 4.468-.806 5.957-2.18L15.05 16.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.958v2.332A9 9 0 0 0 12.001 21"></path><path id="Shape_3" fill="#FBBC05" d="M6.964 13.712a5.4 5.4 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957A9 9 0 0 0 3 12.002c0 1.452.348 2.827.957 4.042z"></path><path id="Shape_4" fill="#EA4335" d="M12 6.58c1.322 0 2.508.455 3.441 1.346l2.582-2.58C16.463 3.892 14.427 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71"></path></g></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign in With Google</div>
                                                </div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><g id="facebook"><g id="facebook-vector"><path fill="#1877F2" d="M22 12.002c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.799c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.437-4.888 8.437-9.879"></path><path fill="#fff" d="m15.893 14.893.443-2.891h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.284 0-3.777 1.385-3.777 3.89v2.204h-2.54v2.89h2.54v6.989a10 10 0 0 0 3.124 0v-6.988z"></path></g></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign in With Facebook</div>
                                                </div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><path fill="#242424" d="M13.346 10.932 18.88 4.5h-1.311l-4.805 5.585L8.926 4.5H4.5l5.803 8.446L4.5 19.69h1.311l5.074-5.898 4.053 5.898h4.426zM11.55 13.02l-.588-.84-4.678-6.693h2.014l3.776 5.4.588.842 4.907 7.02h-2.014z"></path></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign in With Apple</div>
                                                </div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="bt"><g id="apple"><path id="apple-vector" fill="currentColor" d="M18.52 8.23c-.106.086-1.993 1.183-1.993 3.62 0 2.82 2.401 3.818 2.473 3.843-.011.06-.381 1.366-1.266 2.696-.788 1.17-1.612 2.34-2.865 2.34s-1.575-.751-3.022-.751c-1.41 0-1.91.775-3.056.775S6.845 19.67 5.925 18.34C4.86 16.778 4 14.35 4 12.048c0-3.694 2.329-5.653 4.621-5.653 1.218 0 2.233.825 2.998.825.728 0 1.863-.874 3.248-.874.525 0 2.412.05 3.654 1.885m-4.31-3.448c.572-.701.978-1.674.978-2.647 0-.135-.011-.272-.035-.382-.933.036-2.042.64-2.71 1.44-.526.616-1.016 1.589-1.016 2.575 0 .148.024.296.035.344a1.4 1.4 0 0 0 .25.025c.837 0 1.89-.578 2.497-1.355"></path></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign in With X</div>
                                                </div>
                                                <Link to={"/login"}>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><g id="email-icon"><g id="Group 10123" stroke="#242424"><rect id="Rectangle 1488" width="17" height="13" x="3.5" y="5.505" rx="1"></rect><path id="Vector 107" stroke-linecap="round" d="m3.5 8.005 8.5 6 8.5-6"></path></g></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign in With Email</div>
                                                </div>
                                                </Link>

                                                <div className="modal_sign_in">
                                                    <span>
                                                        Already have an account?
                                                        <Link onClick={() => { openmodal(); closelogin(); }}> Sign in</Link>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal_footer">
                                            <div>
                                                <span>Click “Sign up” to agree to Medium’s <Link>Terms of Service</Link> and acknowledge that
                                                    Medium’s <Link>Privacy Policy</Link> applies to you.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>




                    {/* sign up */}
                    <div>
                        <button className="getstarted-btn" data-toggle="modal" data-target="#exampleModalLong" onClick={openmodal}>Get Started</button>
                        {showsignup && (
                            <div className='overlay'>

                                <div className="modalBackground">

                                    <div className="modalContainer">
                                        <div className='titleCloseBtn'>
                                            <button onClick={closemodal}>
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <h5 className="title" >Join Medium.</h5>

                                        <div class="body">
                                            <div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><g id="google"><g id="google-vector" fill-rule="evenodd" clip-rule="evenodd"><path id="Shape" fill="#4285F4" d="M20.64 12.205q-.002-.957-.164-1.84H12v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615"></path><path id="Shape_2" fill="#34A853" d="M12 21c2.43 0 4.468-.806 5.957-2.18L15.05 16.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.958v2.332A9 9 0 0 0 12.001 21"></path><path id="Shape_3" fill="#FBBC05" d="M6.964 13.712a5.4 5.4 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957A9 9 0 0 0 3 12.002c0 1.452.348 2.827.957 4.042z"></path><path id="Shape_4" fill="#EA4335" d="M12 6.58c1.322 0 2.508.455 3.441 1.346l2.582-2.58C16.463 3.892 14.427 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71"></path></g></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign Up With Google</div>
                                                </div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><g id="facebook"><g id="facebook-vector"><path fill="#1877F2" d="M22 12.002c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.799c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.437-4.888 8.437-9.879"></path><path fill="#fff" d="m15.893 14.893.443-2.891h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.284 0-3.777 1.385-3.777 3.89v2.204h-2.54v2.89h2.54v6.989a10 10 0 0 0 3.124 0v-6.988z"></path></g></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign Up With Facebook</div>
                                                </div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><path fill="#242424" d="M13.346 10.932 18.88 4.5h-1.311l-4.805 5.585L8.926 4.5H4.5l5.803 8.446L4.5 19.69h1.311l5.074-5.898 4.053 5.898h4.426zM11.55 13.02l-.588-.84-4.678-6.693h2.014l3.776 5.4.588.842 4.907 7.02h-2.014z"></path></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign Up With Apple</div>
                                                </div>
                                                <div className="modal_signopt">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="bt"><g id="apple"><path id="apple-vector" fill="currentColor" d="M18.52 8.23c-.106.086-1.993 1.183-1.993 3.62 0 2.82 2.401 3.818 2.473 3.843-.011.06-.381 1.366-1.266 2.696-.788 1.17-1.612 2.34-2.865 2.34s-1.575-.751-3.022-.751c-1.41 0-1.91.775-3.056.775S6.845 19.67 5.925 18.34C4.86 16.778 4 14.35 4 12.048c0-3.694 2.329-5.653 4.621-5.653 1.218 0 2.233.825 2.998.825.728 0 1.863-.874 3.248-.874.525 0 2.412.05 3.654 1.885m-4.31-3.448c.572-.701.978-1.674.978-2.647 0-.135-.011-.272-.035-.382-.933.036-2.042.64-2.71 1.44-.526.616-1.016 1.589-1.016 2.575 0 .148.024.296.035.344a1.4 1.4 0 0 0 .25.025c.837 0 1.89-.578 2.497-1.355"></path></g></svg>
                                                    </div>
                                                    <div className="modal_signpt_text">Sign Up With X</div>
                                                </div>
                                                <Link to={"/signup"}>
                                                    <div className="modal_signopt">

                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="bt"><g id="email-icon"><g id="Group 10123" stroke="#242424"><rect id="Rectangle 1488" width="17" height="13" x="3.5" y="5.505" rx="1"></rect><path id="Vector 107" stroke-linecap="round" d="m3.5 8.005 8.5 6 8.5-6"></path></g></g></svg>
                                                        </div>

                                                        <div className="modal_signpt_text">Sign Up With Email</div>

                                                    </div>
                                                </Link>
                                                <div className="modal_sign_in">
                                                    <span>
                                                        Already have an account?
                                                        <Link onClick={() => { openlogin(); closemodal(); }}> Sign Up</Link>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal_footer">
                                            <div>
                                                <span style={{ padding: "0 0 20px 0" }}>Forgot email or trouble signing in? <Link>Get help</Link>.</span><br />
                                                <span>Click “Sign in” to agree to Medium’s <Link>Terms of Service</Link> and acknowledge that
                                                    Medium’s <Link>Privacy Policy</Link> applies to you.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
            <hr className="hr" />

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
    )
}

export default LandingPage;