import React, { useState } from "react";
import "../css/Writearticle.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function WriteArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [elements, setElements] = useState([{ type: "paragraph", content: "" }]);
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const storedUser = localStorage.getItem("user");
  const id = storedUser ? JSON.parse(storedUser)._id : null;
  const navigate = useNavigate()
  const handleInputChange = (index, value) => {
    const updatedElements = [...elements];
    updatedElements[index].content = value;
    setElements(updatedElements);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter" && elements[index].content.trim()) {
      event.preventDefault();
      setElements([...elements, { type: "paragraph", content: "" }]);
      setActiveIndex(elements.length);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newElements = files.map((file) => ({
      type: "image",
      content: file,
    }));
    setElements((prev) => [...prev, ...newElements]);
    setImages((prevFiles) => [...prevFiles, ...files]);
  };

  const handleTypeChange = (index, newType) => {
    const updatedElements = [...elements];
    updatedElements[index] = newType === "image"
      ? { type: "image", content: "" }
      : { type: "paragraph", content: "" };
    setElements(updatedElements);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Title and description are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    // Add elements to FormData
    formData.append("elements", JSON.stringify(elements.map((element, index) => ({
      type: element.type,
      content: element.type === "image" ? `file-${index}` : element.content,
    }))));

    // Append each image to the 'elements' field (field name expected by Multer)
    images.forEach((image) => {
      formData.append('elements', image);  // Append directly under 'elements'
    });

    try {
      const response = await fetch(`https://meduimapi-kd3u.onrender.com/api/blog/Writearticle/${id}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        alert("Article successfully created");
        navigate("/homepage")
      } else {
        alert("Error creating article");
      }
    } catch (error) {
      alert("Failed to create article");
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="App">
      <Navbar />

      <h1>Create Article</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="dynamic-input" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="dynamic-input" />

      <div className="editor-container">
        {elements.map((element, index) => (
          <div key={index} className="element" onFocus={() => setActiveIndex(index)}>
            <div className="add-options left-options" style={{ position: "absolute", left: "-120px", top: "50%", transform: "translateY(-50%)" }}>
              <select value={element.type} onChange={(e) => handleTypeChange(index, e.target.value)} className="add-type-selector">
                <option value="paragraph">Paragraph</option>
                <option value="image">Image</option>
              </select>
            </div>
            {element.type === "paragraph" ? (
              <input
                type="text"
                value={element.content}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                placeholder="Write something..."
                className="dynamic-input"
                onFocus={() => setActiveIndex(index)}
              />
            ) : (
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, index)} multiple />
            )}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className="submit-button">Submit Article</button>
    </div>
  );
}

export default WriteArticle;
