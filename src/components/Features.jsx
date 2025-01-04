import React, { useState } from "react";
import "./Features.css";
import SearchCard from "./featuresCards/SearchCard";
import WorkspaceCard from "./featuresCards/WorkspaceCard";

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
