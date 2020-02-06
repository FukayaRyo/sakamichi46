import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Members.css";

const Members = ({ profile, index }) => {
  const srcImg = profile.profilePhotoUri;
  // return <div key={index}>{profile.name}</div>;

  return (
    <Card color="violet" key={index}>
      <Image
        src={srcImg}
        size="midium"
        circular
        centered
        wrapped
        ui={false}
        placeholder="square"
      />
      <Card.Content>
        <Card.Header>{profile.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Members;
