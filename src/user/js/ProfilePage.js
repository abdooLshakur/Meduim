import React, { useEffect, useState } from "react";
import "../css/Profile.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null); // Avatar preview

  // Get userId from sessionStorage dynamically
  const storedUser = localStorage.getItem("user");
  const userId = storedUser ? JSON.parse(storedUser)._id : null;


  useEffect(() => {
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditedUser(parsedUser);
    }
  }, []);

  // Handle text input changes
  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save profile updates
  const handleSave = async () => {
    try {
      if (!userId) {
        throw new Error("User ID not found. Please log in again.");
      }

      const formData = new FormData();
      formData.append("full_name", editedUser.full_name);
      formData.append("email", editedUser.email);
      formData.append("bio", editedUser.bio || "");
      formData.append("pronounce", editedUser.pronounce || "");

      if (selectedFile) {
        formData.append("avatar", selectedFile); // Only add avatar if selected
      }

      const response = await fetch(`http://localhost:5000/update-user/${userId}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="page-container">
      <Navbar />

      <div className="content">
        <div className="white-container">
          {/* Left Section with Username */}
          <div className="left-section">
            <h2>{editedUser ? editedUser.full_name : "Guest"}</h2> {/* Dynamic username */}
            <div className="nav-tabs">
              <a href="#" className="active">Home</a>
              <a href="#">About</a>
            </div>
            <div className="card">
              <p><strong>Reading List</strong></p>
              <p>No stories 🔒</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            {/* Avatar Preview */}
            <img 
              src={preview || `http://localhost:5000/${user?.avatar || "default-avatar.jpg"}`} 
              alt="Profile" 
              className="profile-pic-large" 
            />

            {/* Restored Username Below Avatar */}
            <p><strong>{editedUser ? editedUser.full_name : "Guest"}</strong></p>

            {isEditing ? (
              <>
                <input type="text" name="full_name" value={editedUser.full_name} onChange={handleInputChange} className="edit-input" placeholder="Full Name" />
                <input type="email" name="email" value={editedUser.email} onChange={handleInputChange} className="edit-input" placeholder="Email" />
                <input type="text" name="bio" value={editedUser.bio || ""} onChange={handleInputChange} className="edit-input" placeholder="Bio" />
                <input type="text" name="pronounce" value={editedUser.pronounce || ""} onChange={handleInputChange} className="edit-input" placeholder="Pronouns" />

                {/* File input for avatar */}
                <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
                <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={toggleEdit} className="cancel-btn">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>Email: {user ? user.email : "Not provided"}</p>
                <p>Bio: {user?.bio || "No bio available"}</p>
                <p>Pronouns: {user?.pronounce || "Not specified"}</p>

                <button onClick={toggleEdit} className="edit-link">Edit Profile</button>
              </>
            )}

            <div className="right-footer">
              <a href="#">Help</a>
              <a href="#">Status</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
