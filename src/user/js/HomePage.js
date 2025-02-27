import image from "../images/Homepageimg/1722373006010.png_image.png";
import banner from "../images/bambi-lp1va5l9v4m13r3g.jpg";
import "../css/Homepage.css"
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function HomePage() {
    const [article, setarticle] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(3);
    const [active, setActive] = useState("For you");
    const navRef = useRef(null);

    const categories = [
        "For you",
        "Following",
        "Deep Learning",
        "JavaScript",
        "Blockchain",
        "Software Engineering",
        "AI",
        "React",
        "Node.js",
    ];

    const scrollLeft = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -150, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: 150, behavior: "smooth" });
        }
    };



    const posts = [
        {
            image: image,
            title: "The Future of Web Development",
            description: "This post discusses the latest trends and technologies in web development.",
            bio: "Coding Beauty",
            name: "Musa Ahmad",
            banner: banner
        },
        {
            image: image,
            title: "Mastering JavaScript in 2024",
            description: "A guide to the essential skills and best practices for mastering JavaScript.",
            bio: "Coding Beauty",
            name: "Musa Ahmad",
            banner: banner
        },
        {
            image: image,
            title: "Building Scalable Applications",
            description: "Learn how to design and build scalable web applications for the modern era.",
            bio: "Coding Beauty",
            name: "Musa Ahmad",
            banner: banner
        },
        {
            image: image,
            title: "Top 10 Tips for Frontend Developers",
            description: "Discover key tips that every frontend developer should know to excel in their career.",
            bio: "Coding Beauty",
            name: "Musa Ahmad",
            banner: banner
        },
        {
            image: image,
            title: "Top 10 Tips for Frontend Developers",
            description: "Discover key tips that every frontend developer should know to excel in their career.",
            bio: "Coding Beauty",
            name: "Musa Ahmad",
            banner: banner
        }
    ];


    const handleSeeMore = () => {
        setVisiblePosts(posts.length);
    };

    let scrollAmount = 0;
    const scrollStep = 200;
    useEffect(() => {
        fetch('http://localhost:5000/api/blog/all')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setarticle(data.data);
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="homepage_body">
            <Navbar />
            {/* <nav className="navbar">
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
                        <img
                            src="profile.jpg"
                            alt="Profile"
                            className="profile-icon"
                            onClick={toggleDropdown}
                        />
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to="/profile">Profile</Link>
                                <Link to="/library">Library</Link>
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
                                <Link to="/logout">Sign out</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav> */}

            <div className="story_display">
                <div className="article">
                    <div className="nav-container">
                        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>
                        <div className="nav" ref={navRef}>
                            {categories.map((category) => (
                                <a
                                    key={category}
                                    href="#"
                                    className={active === category ? "active" : ""}
                                    onClick={() => setActive(category)}
                                >
                                    {category}
                                </a>
                            ))}
                        </div>
                        <button className="scroll-btn right" onClick={scrollRight}>›</button>
                    </div>


                    {article && (
                        <div className="article_wapper" >
                            {article.map((post) => (
                                <div >
                                    <div className="article_container" key={post._id}>
                                        <div className="article_details">
                                            <div className="Wrtiter_info">
                                                <div className="Writer_avatar"><img src={`http://localhost:5000/${post.user_avatar}`} /></div>
                                                <div className="writer_name">{post.user_name}</div>
                                            </div>
                                            <Link to={`/singlearticle/${post._id}`}>
                                                <div className="article_tittle"><p>{post.title}</p></div>
                                                <div className="article_descp"><span>{post.description}</span></div>
                                            </Link>
                                        </div>
                                        <div className="post_container_img">
                                            {post.elements && post.elements.find((el) => el.type === 'image') ? (
                                                <img
                                                    src={`http://localhost:5000/${post.elements.find((el) => el.type === 'image').content}`}
                                                    alt="Article Banner"
                                                />
                                            ) : (
                                                <p>No image available</p>
                                            )}
                                        </div>

                                    </div>
                                    <div className="article_reviews">
                                        <div className="article_reviews_flex">
                                            <div><span>Jun 12</span></div>
                                            <div>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#6B6B6B" fill-rule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clip-rule="evenodd"></path></svg>
                                                </span>
                                                <span className="r_n">2.6k</span>
                                            </div>
                                            <div>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6B6B6B" viewBox="0 0 16 16"><path fill="#6B6B6B" d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"></path></svg>
                                                </span>
                                                <span className="r_n">30</span>
                                            </div>
                                        </div>
                                        <div className="article_reviews_flex">
                                            <div>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" class="nh ni"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"></path></svg></span>
                                            </div>
                                            <div>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" class="bk"><path fill="#000" d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"></path></svg></span>
                                            </div>
                                            <div>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41" clip-rule="evenodd"></path></svg></span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                <div style={{ paddingTop: "13px" }}>
                    <div ><span>Staff Pick</span></div>
                    <div>
                        {posts && (
                            <div>
                                {posts.slice(0, visiblePosts).map((post, index) => (
                                    <div key={index}>
                                        <div className="side_article_container">
                                            <div className="side_article_details">
                                                <div className="side_Wrtiter_info">
                                                    <div className="Writer_avatar">
                                                        <img src={post.image} alt={post.name} />
                                                    </div>
                                                    <div>{post.name}</div>
                                                </div>
                                                <div className="side_article_tittle">
                                                    <p>{post.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {posts.length > 3 && visiblePosts < posts.length && (
                            <div className="see-more-button">
                                <button onClick={handleSeeMore}>See the full list</button>
                            </div>
                        )}
                    </div>
                    <div>
                        <div>Recommended Options</div>
                        <div></div>
                    </div>
                    <div>
                        {posts && (
                            <div>
                                {posts.slice(0, visiblePosts).map((post, index) => (
                                    <div key={index}>
                                        <div className="side_article_container">
                                            <div className="side_article_details">
                                                <div className="side_Wrtiter_info">
                                                    <div className="Writer_avatar">
                                                        <img src={post.image} alt={post.name} />
                                                    </div>
                                                    <div>{post.name}</div>
                                                </div>
                                                <div className="side_article_tittle">
                                                    <p>{post.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {posts.length > 3 && visiblePosts < posts.length && (
                            <div className="see-more-button">
                                <button onClick={handleSeeMore}>See the full list</button>
                            </div>
                        )}
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
