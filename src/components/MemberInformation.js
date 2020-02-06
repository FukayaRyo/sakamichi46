import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Image, Button } from "semantic-ui-react";

const MemberInformation = ({ match }) => {
  const [infos, setInfos] = useState({});
  const targetGroup = match.params.group;
  const targetMember = match.params.memberName;
  const getMemberProfile = async () => {
    const response = await axios.get(
      `http://46api.sakamichi46.com/sakamichi46api/api/${targetGroup}/profile/${targetMember}`
    );
    setInfos(response.data);
  };

  const ShowMemberProfiles = useMemo(() => {
    return [infos].map((info, index) => {
      return (
        <Card color="violet" key={index} centered>
          <Image
            src={info.profilePhotoUri}
            circular
            centered
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{info.name}</Card.Header>
            <Card.Meta>
              <span className="date">{`誕生日：${info.birthday}`}</span>
            </Card.Meta>
            <Card.Description>
              <div>{`血液型：${info.bloodType}`}</div>
              <div>{`星座：${info.constellation}`}</div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={info.blogUri}>ブログへ</a>
          </Card.Content>
        </Card>
      );
    });
  }, [infos]);

  useEffect(() => {
    getMemberProfile();
  }, []);

  return (
    <div>
      {ShowMemberProfiles}
      <Button>
        <Link to="/keyakizaka46">Homeへ</Link>
      </Button>
      <Button>
        <Link to={`/${targetGroup}`}>戻る </Link>
      </Button>
    </div>
  );
};

export default MemberInformation;
