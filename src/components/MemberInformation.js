import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import nogizaka46 from "../resource/nogizaka46";
import keyakizaka46 from "../resource/keyakizaka46";
import hinatazaka from "../resource/hinatazaka";

const MemberInformation = ({ match }) => {
  const targetGroup = match.params.group;
  const targetMember = match.params.memberName;
  const targetMemberData = (() => {
    switch (targetGroup) {
      case "nogizaka46":
        return nogizaka46.find(v => v.urlName === targetMember);
      case "hiraganakeyaki":
        return hinatazaka.find(v => v.urlName === targetMember);
      default:
        return keyakizaka46.find(v => v.urlName === targetMember);
    }
  })();

  return (
    <div>
      <Card color="violet" centered>
        <Image
          src={targetMemberData.profilePhotoUri}
          circular
          centered
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{targetMemberData.name}</Card.Header>
          <Card.Meta>
            <span className="date">{`誕生日：${targetMemberData.birthday}`}</span>
          </Card.Meta>
          <Card.Description>
            <div>{`血液型：${targetMemberData.bloodType}`}</div>
            <div>{`星座：${targetMemberData.constellation}`}</div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={targetMemberData.blogUri}>ブログへ</a>
        </Card.Content>
      </Card>
      <Button>
        <Link to="/nogizaka46">Homeへ</Link>
      </Button>
      <Button>
        <Link to={`/${targetGroup}`}>戻る </Link>
      </Button>
    </div>
  );
};

export default MemberInformation;
