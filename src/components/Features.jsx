import React, { useState } from "react";
import "./Features.css";
import SearchCard from "./featuresCards/SearchCard.jsx";
import WorkspaceCard from "./featuresCards/WorkspaceCard.jsx";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-content">
        <SearchCard />
        <WorkspaceCard />
      </div>
    </section>
  );
};

export default Features;
