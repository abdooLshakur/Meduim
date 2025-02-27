import React from "react";
import SinglepostPage from "./SinglepostPage";

const dynamic = () => {
  const moreFromData = [
    {
      image: "https://via.placeholder.com/100",
      title: "Article 1",
      description: "Description for article 1.",
    },
    {
      image: "https://via.placeholder.com/100",
      title: "Article 2",
      description: "Description for article 2.",
    },
    {
      image: "https://via.placeholder.com/100",
      title: "Article 3",
      description: "Description for article 3.",
    },
  ];

  const recommendedData = [
    {
      image: "https://via.placeholder.com/100",
      title: "Recommendation 1",
      description: "Description for recommendation 1.",
    },
    {
      image: "https://via.placeholder.com/100",
      title: "Recommendation 2",
      description: "Description for recommendation 2.",
    },
    {
      image: "https://via.placeholder.com/100",
      title: "Recommendation 3",
      description: "Description for recommendation 3.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <SinglepostPage moreFromData={moreFromData} recommendedData={recommendedData} />
    </div>
  );
};

export default dynamic;
