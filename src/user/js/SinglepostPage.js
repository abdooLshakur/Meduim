import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/SingleArticle.css";
import "../css/Membership.css";
import Footer from "./Footer";
const SinglepostPage = ({ moreFromData, recommendedData }) => {
  const [SinglearticleData, SetSinglearticleData] = useState("");
  const { id } = useParams();
  console.log(moreFromData);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/Singlearticle/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        SetSinglearticleData(data.data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [id]);
  const industryLeaders = [
    {
      name: "Marc-André Giroux",
      title: "Sr. Software Developer",
      company: "Netflix",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Carlos Arguelles",
      title: "Sr. Staff Engineer",
      company: "Google",
      image: "https://www.bancegt.com/wp-content/uploads/2019/01/person6.jpg",
    },
    {
      name: "Tony Yiu",
      title: "Director",
      company: "Nasdaq",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg",
    },
    {
      name: "Brandeis Marshall",
      title: "CEO",
      company: "DataedX",
      image: "https://static.vecteezy.com/system/resources/thumbnails/039/051/196/small/ai-generated-woman-using-laptop-device-isolated-on-blue-background-smiling-female-model-holding-computer-presenting-advertising-job-search-online-shopping-online-services-photo.jpeg",
    },
    {
      name: "Cassie Kozyrkov",
      title: "Chief Decision Scientist",
      company: "Google",
      image: "https://t4.ftcdn.net/jpg/05/23/80/51/360_F_523805171_fXSFj3H8Vzgj7VYnSvJhqHiW1ix1YNsq.jpg",
    },
    {
      name: "Memo Akten",
      title: "Asst. Professor",
      company: "UCSD",
      image: "https://media.istockphoto.com/id/536988396/photo/confident-man-in-blue-sweater-portrait.jpg?s=612x612&w=0&k=20&c=Ww3dK11KMRuru6mqddVQ29u0XZxvq_dFghN2Ta6OCN4=",
    },
    {
      name: "Vitali Zaidman",
      title: "Software Architect",
      company: "Meta",
      image: "https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=8l-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=",
    },
    {
      name: "Camille Fournier",
      title: "Head of Engineering",
      company: "JPMorgan Chase",
      image: "https://media.istockphoto.com/id/869773424/photo/i-always-start-my-day-with-a-fresh-cup-of-coffee.jpg?s=612x612&w=0&k=20&c=hfLg2sDZKG4usxKJgx-nLHy4V0yggoEXFWTT2LhgIPo=",
    },
  ];

  const responses = [
    {
      id: 1,
      name: "Ryan Palmisano",
      username: "him/he",
      time: "5 days ago",
      text: "How many 'this thing breaks the industry' tools can we produce in one year to make sure that nobody accomplishes anything anymore out of sheer hype fatigue.\n\nLike of all the existential problems out there to solve, why is tech so focused on competing over the most trivial?",
      likes: 579,
      replies: 2,
    },
    {
      id: 2,
      name: "Samuel Clark",
      time: "6 days ago",
      text: "You gotta talk about pricing before you compare to free editors like Neovim, VSCode, etc.",
      likes: 256,
      replies: 3,
    },
    {
      id: 3,
      name: "Joe Wilson",
      time: "6 days ago",
      text: "Sigh",
      likes: 320,
      replies: 0,
    },
  ];

  const data = [
    {
      category: "More from Tech Bytes and Coding Beauty",
      items: [
        {
          title: "Google AI's New Feature",
          description: "Exploring the latest advancements in AI.",
          image: "https://observenow.com/wp-content/uploads/2024/08/google-ai.png",
        },
        {
          title: "A Rising Icon in Microsoft's Strategy",
          description: "A dive into Microsoft's latest approach.",
          image: "https://blog.disfold.com/wp-content/uploads/2024/08/microsft-thumb.jpg",
        },
        {
          title: "OpenAI's New AI Agent with Competitive Edge",
          description: "How AI is transforming industries.",
          image: "https://cdn.businessday.ng/2023/10/OpenAI.png",
        },
      ],
    },
    {
      category: "Recommended from Medium",
      items: [
        {
          title: "Just Stop Writing Python Executables Like This!",
          description: "Best practices for Python executables.",
          image: "https://miro.medium.com/v2/resize:fit:1400/0*o_FVnuqpS7ZU5tHj",
        },
        {
          title: "We Are in Absolute Awe for AI Writing Like a Super Star!",
          description: "The latest AI advancements in content writing.",
          image: "https://storage.googleapis.com/jobin-cloud/Jobin/blog-images/top-artificial-intelligence.jpg",
        },
        {
          title: "Why I’m Moving Cloudflare To America’s Black-Owned Domains",
          description: "A take on domain ownership and hosting.",
          image: "https://static-blog.siteground.com/wp-content/uploads/sites/2/2017/02/Cloudflare-HTTPS-WAF-update.jpg",
        },
      ],
    },
  ];
  return (
    <div className="body">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo"> <Link to={"/homepage"}>Medium</Link> </span>
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <div className="nav-right">
          <button className="write-btn">Write</button>
          <span className="bell-icon">🔔</span>
          <img
            src="profile.jpg"
            alt="Profile"
            className="profile-icon"
          />
        </div>
      </nav>

      <div className="singleArticle_container">
        <div className="singlepage_title">
          <h1>{SinglearticleData.title}</h1>
        </div>
        <div></div>
        <div className="article_reviews">
          <div className="article_reviews_flex">
            <div>
              <span>Jun 12</span>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#6B6B6B"
                    fill-rule="evenodd"
                    d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="r_n">2.6k</span>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#6B6B6B"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#6B6B6B"
                    d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
                  ></path>
                </svg>
              </span>
              <span className="r_n">30</span>
            </div>
          </div>
          <div className="article_reviews_flex">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="nh ni"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="bk"
                >
                  <path
                    fill="#000"
                    d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div>
          {SinglearticleData &&
            SinglearticleData.elements.map((element, index) => {
              if (element.type === "paragraph") {
                return (
                  <div className="paragraphs">
                    <p key={index}>{element.content}</p>
                  </div>
                );
              } else if (element.type === "image") {
                return (
                  <div className="Singlepage_img">
                    <img
                      key={index}
                      src={`${"http://localhost:5000"}/${element.content}`}
                      alt="Article Visual"
                    />
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>

      <div className="membership-container">
        <h2>Read the best stories from industry leaders on Medium.</h2>
        <p className="description">
          The author made this story available to Medium members only. Upgrade to instantly unlock this story plus other member-only benefits.
        </p>
        <ul className="benefits-list">
          <li>Access all member-only stories on Medium</li>
          <li>Become an expert in your areas of interest</li>
          <li>Get in-depth answers to thousands of questions about technical topics</li>
          <li>Grow your career or build a new one</li>
        </ul>
        <div className="leaders-grid">
          {industryLeaders.map((leader, index) => (
            <motion.div key={index} className="leader-card" whileHover={{ scale: 1.1 }}>
              <img src={leader.image} alt={leader.name} className="leader-image" />
              <p className="leader-name">{leader.name}</p>
              <p className="leader-title">{leader.title}</p>
              <p className="leader-company">{leader.company}</p>
            </motion.div>
          ))}
        </div>
        <motion.button className="upgrade-button" whileHover={{ scale: 1.1 }}>
          Upgrade
        </motion.button>
      </div>

      <div style={{ maxWidth: "600px", margin: "auto", padding: "16px", fontFamily: "Arial, sans-serif" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Responses ({responses.length})</h2>
        <div style={{ display: "flex", border: "1px solid #ddd", borderRadius: "5px", padding: "10px", background: "white" }}>
          <input
            type="text"
            placeholder="What are your thoughts?"
            style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "none", outline: "none" }}
          />
          <button style={{ padding: "5px 10px", background: "green", borderRadius: "50px", color: "white", border: "none", borderLeft: "1px solid #ddd", cursor: "pointer", marginBottom: "20px" }}>Respond</button>
        </div>
        {responses.map((response) => (
          <div key={response.id} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "10px", background: "#f9f9f9" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={`https://i.pravatar.cc/40?img=${response.id}`} alt={response.name} style={{ borderRadius: "50%", marginRight: "10px" }} />
              <div>
                <p style={{ fontWeight: "bold", margin: "0" }}>{response.name}</p>
                <p style={{ fontSize: "12px", color: "#777", margin: "0" }}>{response.time}</p>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "#333" }}>{response.text}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button style={{ background: "transparent", border: "none", color: "#007bff", cursor: "pointer" }}>👍 {response.likes}</button>
              <button style={{ background: "transparent", border: "none", color: "#007bff", cursor: "pointer" }}>💬 {response.replies} replies</button>
            </div>
          </div>
        ))}
        <button style={{ width: "100%", padding: "10px", background: "#ddd", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>See all responses</button>
      </div>
      <div style={{ background: "#F9F9F9", }}>
        <div style={{ background: "none", width: "70%", margin: "0 auto", display: "grid", gap: "40px", padding: "40px 0" }}>
          {data.map((section, index) => (
            <div key={index} style={{ borderBottom: "1px solid #ddd", paddingBottom: "24px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>{section.category}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
                {section.items.map((item, i) => (
                  <div key={i} style={{ boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
                    <img src={item.image} alt={item.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                    <div style={{ padding: "16px" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: "600" }}>{item.title}</h3>
                      <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>{item.description}</p>
                      <a href="#" style={{ display: "inline-block", marginTop: "12px", color: "#007bff", textDecoration: "none" }}>Read more</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglepostPage;
