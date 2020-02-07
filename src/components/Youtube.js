import React from "react";

const Youtube = ({ YoutubeUrl, index }) => {
  return (
    <div key={index}>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src={YoutubeUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
