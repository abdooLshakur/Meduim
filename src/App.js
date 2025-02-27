import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./user/js/LandingPage";
import HomePage from "./user/js/HomePage";
import Writearticle from "./user/js/Writearticle";
import SinglepostPage from "./user/js/SinglepostPage";
import Profilepage from "./user/js/ProfilePage";
import Login from "./user/js/Login";
import Signup from "./user/js/SignupPage";
import Articlespage from "./user/js/Articlespage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path='/singlearticle/:id' element={<SinglepostPage />} />
          <Route path="/writearticle" element={<Writearticle />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/articles" element={<Articlespage />} />
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
