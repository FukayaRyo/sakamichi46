import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Members from "./Members";
import Nogizaka from "../MemberData/Nogizaka46";
import Keyakizaka from "../MemberData/Keyakizaka";
import Hiraganakeyaki from "../MemberData/Hiraganakeyaki";
import { Card, Header } from "semantic-ui-react";
import nogizaka46 from "../resource/nogizaka46";
import keyakizaka46 from "../resource/keyakizaka46";
import hinatazaka from "../resource/hinatazaka";

const Home = ({ match }) => {
  const targetGroup = match.params.group;
  const [profiles, setProfiles] = useState([]);
  const getMembers = () => {
    switch (targetGroup) {
      case "nogizaka46":
        return setProfiles(nogizaka46);
      case "hinatazaka":
        return setProfiles(hinatazaka);
      default:
        return setProfiles(keyakizaka46);
    }
  };

  useEffect(() => {
    getMembers();
  }, [targetGroup]);

  // async () => {
  //   const response = await axios.get(
  //     `http://46api.sakamichi46.com/sakamichi46api/api/${targetGroup}/profile`
  //   );
  // setProfiles(response.data);
  // };

  console.log(profiles);

  const profileList = useMemo(() => {
    return profiles.map((profile, index) => {
      // const id = index;
      // const targetMember = (() => {
      // switch (targetGroup) {
      //   case "nogizaka46":
      //     return Nogizaka.find(v => v.id === id);
      //   case "hiraganakeyaki":
      //     return Hiraganakeyaki.find(v => v.id === id);
      //   default:
      //     return Keyakizaka.find(v => v.id === id);
      //   }
      // })();

      return (
        <div key={index}>
          <Link to={`/${targetGroup}/member/${profile.urlName}`}>
            <Members profile={profile} index={index} />
          </Link>
        </div>
      );
    });
  }, [profiles]);

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
