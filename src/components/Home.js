import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Members from "./Members";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const getNogizakaProfile = async () => {
    const response = await axios.get(
      "http://46api.sakamichi46.com/sakamichi46api/api/nogizaka46/profile"
    );
    setProfiles(response.data);
  };

  const profileList = useMemo(() => {
    return profiles.map((profile, index) => {
      return (
        <div key={index}>
          <Members profile={profile} index={index} />
        </div>
      );
    });
  }, [profiles]);

  useEffect(() => {
    getNogizakaProfile();
  }, []);

  return (
    <div>
      <p>Home</p>
      <Link to="/nogizaka46/music">nogizaka-music</Link>
      <div></div>
      <Link to="/nogizaka46/members">nogizaka-members</Link>
      {profileList}
    </div>
  );
};

export default Home;
