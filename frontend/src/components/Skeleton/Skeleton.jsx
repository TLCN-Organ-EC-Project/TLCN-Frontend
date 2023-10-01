import React from "react";
import "./skeleton.css";


export default function Skeleton({ type }) {
  const COUNTER = 3;
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

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loading...</span>
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
  if (type === "top") return <TopSkeleton />;
  if (type === "menu") return <MenuSkeleton />;
  if (type === "custom") return <CustomLoading />;
}