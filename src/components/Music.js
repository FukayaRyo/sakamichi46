import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Youtube from "./Youtube";
import "./Members.css";
import { Header, Button } from "semantic-ui-react";
import keyakizakaUrl from "../YoutubeUrl/keyakizakaUrl";
import hiraganakeyakiUrl from "../YoutubeUrl/hiraganakeyakiUrl";
import nogizakaUrl from "../YoutubeUrl/nogizakaUrl";

const Music = ({ match }) => {
  const targetGroup = match.params.group;
  const [albums, setAlbums] = useState([]);
  // const getAlbums = async () => {
  //   const response = await axios.get(
  //     `http://46api.sakamichi46.com/sakamichi46api/api/${targetGroup}/music`
  //   );
  //   setAlbums(response.data);
  // };
  // useEffect(() => {
  //   getAlbums();
  // }, [targetGroup]);

  // const albumList = useMemo(() => {
  //   return (
  //     <div>
  //       <a href="https://www.youtube.com/watch?v=A2k6ZO6B0A8&index=5&list=PL0eK3gfF1BbPgpvZw8ZvlneUlMU3GDemi">
  //         ガラスを割れ
  //       </a>
  //       <Youtube YoutubeUrl="https://www.youtube.com/watch?v=A2k6ZO6B0A8&index=5&list=PL0eK3gfF1BbPgpvZw8ZvlneUlMU3GDemi" />
  //     </div>
  //   );
  // }, [albums]);

  const targetGroupMusic = () => {
    switch (targetGroup) {
      case "nogizaka46":
        return setAlbums(nogizakaUrl);
      case "hiraganakeyaki":
        return setAlbums(hiraganakeyakiUrl);
      default:
        return setAlbums(keyakizakaUrl);
    }
  };

  useEffect(() => {
    targetGroupMusic();
  }, [targetGroup]);

  const albumList = useMemo(() => {
    return albums.map((album, index) => {
      return (
        <div key={index}>
          <Button color="">
            <a href={album.Url}>{album.name}</a>
          </Button>
          <Youtube YoutubeUrl={album.embedUrl} index={index} />
        </div>
      );
    });
  }, [albums]);

  return (
    <div>
      <Header as="h2" color="grey">
        楽曲紹介
      </Header>
      {albumList}
    </div>
  );
};

export default Music;
