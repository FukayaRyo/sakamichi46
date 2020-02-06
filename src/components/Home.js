import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Members from "./Members";
import Nogizaka from "../MemberData/Nogizaka46";
import Keyakizaka from "../MemberData/Keyakizaka";
import Hiraganakeyaki from "../MemberData/Hiraganakeyaki";
import { Card, Header } from "semantic-ui-react";

const Home = ({ match }) => {
  const targetGroup = match.params.group;
  const [profiles, setProfiles] = useState([]);
  const getMembers = async () => {
    const response = await axios.get(
      `http://46api.sakamichi46.com/sakamichi46api/api/${targetGroup}/profile`
    );
    setProfiles(response.data);
  };

  const profileList = useMemo(() => {
    return profiles.map((profile, index) => {
      const id = index;
      const targetMember = (() => {
        switch (targetGroup) {
          case "nogizaka46":
            return Nogizaka.find(v => v.id === id);
          case "hiraganakeyaki":
            return Hiraganakeyaki.find(v => v.id === id);
          default:
            return Keyakizaka.find(v => v.id === id);
        }
      })();

      console.log(profiles);

      return (
        <div key={index}>
          <Link to={`/${targetGroup}/member/${targetMember.UrlName}`}>
            <Members profile={profile} index={index} />
          </Link>
        </div>
      );
    });
  }, [profiles]);

  useEffect(() => {
    getMembers();
  }, [targetGroup]);

  return (
    <div>
      <div className="header">
        <Header as="h2" color="grey">
          メンバー紹介
        </Header>
        <Card.Group itemsPerRow={3}>{profileList}</Card.Group>
      </div>
    </div>
  );
};

export default Home;
