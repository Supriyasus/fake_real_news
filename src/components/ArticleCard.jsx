// src/components/ArticleCard.jsx
import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={`/assets/${article.image}`} // public/assets/image-name
          alt={article.title}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
          onError={(e) => {
            e.target.src = "/assets/fallback.jpg"; // Optional fallback
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.content}</p>
        </div>
        <div className="card-footer text-muted">{article.date}</div>
      </div>
    </div>
  );
}
