import React, { useState } from "react";
import "../css/Writearticle.css";

function WriteArticle() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [elements, setElements] = useState([]);
  const [addType, setAddType] = useState("paragraph");
  const [images, setImages] = useState([]);
  const userId = "67285bc5f36ca1a312a4d533";

  const addElement = () => {
    if (addType === "paragraph" && inputValue.trim()) {
      setElements([...elements, { type: "paragraph", content: inputValue }]);
      setInputValue("");
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



  const handleKeyPress = (event) => {
    if (event.key === "Enter" && addType === "paragraph") {
      addElement();
      event.preventDefault();
    }
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
      const response = await fetch(`http://localhost:5000/api/blog/Writearticle/${userId}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        alert("Article successfully created");
      } else {
        console.error("Error:", data.message);
        alert("Error creating article");
      }
    } catch (error) {
      console.error("Request error:", error);
      alert("Failed to create article");
    }
  };

  return (
    <div className="App">z
      <h1>Create Article</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="dynamic-input"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="dynamic-input"
      />

      <select value={addType} onChange={(e) => setAddType(e.target.value)} className="add-type-selector">
        <option value="paragraph">Paragraph</option>
        <option value="image">Image</option>
      </select>

      {addType === "paragraph" ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a paragraph..."
          className="dynamic-input"
        />
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="dynamic-input"
          multiple
        />
      )}

      {addType === "paragraph" && (
        <button onClick={addElement}>Add Paragraph</button>
      )}

      <div id="element-container">
        {elements.map((element, index) => (
          <div key={index} className="element">
            {element.type === "paragraph" ? (
              <p className="paragraph">{element.content}</p>
            ) : (
              <p className="image-name">{element.content.name}</p>
            )}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className="submit-button">Submit Article</button>
    </div>
  );
}

export default WriteArticle;
