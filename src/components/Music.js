import React from "react";
import { Link } from "react-router-dom";

const Music = ({ match }) => {
  const TargetName = match.params.group;
  return (
    <div>
      <p>{`${TargetName}のMusic`}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Music;
