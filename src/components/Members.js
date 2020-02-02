import React from "react";
// import { Link } from "react-router-dom";

const Members = ({ profile, index }) => {
  return (
    <div key={index}>
      <div>{profile.name}</div>
      <img src={profile.profilePhotoUri} alt=""></img>
      {/* <p>{`${TargetName}のMembers`}</p> */}
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};

export default Members;
