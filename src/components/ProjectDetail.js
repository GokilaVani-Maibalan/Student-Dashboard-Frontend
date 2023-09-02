import React from "react";

export const ProjectDetail = ({ selectedName }) => {
  return (
    <div>
      <h2>{selectedName.description}</h2>
    </div>
  );
};
