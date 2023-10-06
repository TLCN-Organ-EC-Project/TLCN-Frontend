import React from "react";
import "./skeleton.css";


export default function Skeleton({ type }) {
  const COUNTER = 3;
  const COUNTERPOST=3;
  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkDetail">
          <div className="postSkTitle1"></div>
          <div className="postSkTitle2"></div>
          <div className="postSkauthor"></div>
          <div className="postSkText"></div>
        </div>
      </div>
    </div>
  );

  const ProductsSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkTitle"></div>
      <div className="topSkPrice"></div>
    </div>
  );

  const Product = () => (
    <div className="card">
    <div className="header">
      <div className="img"></div>
      <div className="details">
        <span className="name"></span>
        <span className="about"></span>
      </div>
    </div>
  </div>

  )


  if (type === "feed") return Array(COUNTERPOST).fill(<FeedSkeleton />);
  if (type === "test") return Array(COUNTER).fill(<Product />);
  if (type === "product") return Array(COUNTER).fill(<ProductsSkeleton />);

}