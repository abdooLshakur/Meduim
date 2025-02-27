import React, { useState } from "react";
import "../css/Writearticle.css";

function WriteArticle() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [elements, setElements] = useState([]); // Ensure elements is initialized as an empty array
  const [addType, setAddType] = useState("paragraph");
  const [images, setImages] = useState([]); // Ensure image is initialized as an empty array
  const userId = "67285bc5f36ca1a312a4d533";

  const addElement = () => {
    if (addType === "paragraph" && inputValue.trim() !== "") {
      setElements([...elements, { type: "paragraph", content: inputValue }]);
      setInputValue("");
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); 
    setImages(files); 
    setElements((prevElements) => [
      ...prevElements,
      ...files.map((file) => ({ type: "image", content: file.name }))
    ]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && addType === "paragraph") {
      addElement();
      event.preventDefault();
    }
  };

  const HandleSubmit = async () => {
    const paragraphs = elements
      .filter((el) => el.type === "paragraph")
      .map((el) => el.content)
      .join("\n");
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraph", paragraphs);
  
    // Append each file in `image` with the "images" key
    images.forEach((file) => formData.append("images", file)); 
  
    try {
      const response = await fetch(`http://localhost:5000/api/blog/Writearticle/${userId}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        alert("Article successfully created");
        console.log(data.data);
      } else {
        alert("Error creating article");
        console.error(data);
      }
    } catch (error) {
      alert("Error creating article");
      console.error("Error:", error);
    }
  };
  
  
  

  return (
    <div className="App">
      <h1>Create Article</h1>
      <p>Type your article details below, then submit to save it.</p>

      <input
  type="text"
  value={title || ""} // Ensure title is always a string
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Title"
  className="dynamic-input"
/>

      {/* Dropdown to select between adding paragraph or image */}
      <select value={addType} onChange={(e) => setAddType(e.target.value)} className="add-type-selector">
        <option value="paragraph">Paragraph</option>
        <option value="image">Image</option>
      </select>

      {/* Input field for paragraph or file input for image */}
      {addType === "paragraph" ? (
       <input
       type="text"
       value={inputValue || ""} // Ensure inputValue is always a string
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

      {/* Button to add paragraph */}
      {addType === "paragraph" && (
        <button onClick={addElement}>Add Paragraph</button>
      )}

      {/* Elements container */}
      <div id="element-container">
        {elements?.map((element, index) => (
          <div key={index} className="element">
            {element.type === "paragraph" ? (
              <p className="paragraph">{element.content}</p>
            ) : (
              <p className="image-name">{element.content}</p>
            )}
          </div>
        ))}
      </div>

      {/* Submit button to save the article */}
      <button onClick={HandleSubmit} className="submit-button">Submit Article</button>
    </div>
  );
}

export default WriteArticle;
<div className="p-8 bg-white">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* "More From" Section */}
  <div>
    <h2 className="text-xl font-bold mb-4">More From This Blog</h2>
    <div className="space-y-4">
      {moreFromData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 border rounded-lg shadow-sm"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Read More
    </button>
  </div>

  {/* "Recommended From Medium" Section */}
  <div>
    <h2 className="text-xl font-bold mb-4">Recommended From Medium</h2>
    <div className="space-y-4">
      {recommendedData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 border rounded-lg shadow-sm"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
      See All Recommendations
    </button>
  </div>
</div>
</div>