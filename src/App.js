import React, { useState } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Music from "./components/Music";
// import Members from "./components/Members";
import Home from "./components/Home";
import MemberInformation from "./components/MemberInformation";
import { Link } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

function App({}) {
  const Groups = () => {
    const [groups, setGroups] = useState("keyakizaka46");
    const sakamichi46 = [
      {
        name: "乃木坂46",
        code: "nogizaka46"
      },
      {
        name: "欅坂46　",
        code: "keyakizaka46"
      },
      {
        name: "日向坂46",
        code: "hinatazaka"
      }
    ];

    return sakamichi46.map((name, index) => {
      return (
        <Menu inverted pointing secondary key={index} color="green" econdary>
          <Menu.Item>
            <Button color="olive">
              <Link
                to={`/${name.code}`}
                onClick={() => {
                  setGroups(name.code);
                }}
              >
                {name.name}
              </Link>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button thirdary>
              <Link to={`/${name.code}/music`}>楽曲紹介</Link>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button thirdary>
              <Link to={`/${name.code}/members`}>メンバー紹介</Link>
            </Button>
          </Menu.Item>
        </Menu>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>⊿坂道46</p>
      </header>
      <div className="container">
        <Groups />
        <Switch>
          <Route path={"/:group/music"} component={Music} />
          <Route path={"/:group/members"} component={Home} />
          <Route
            path={"/:group/member/:memberyyName"}
            component={MemberInformation}
          />
          <Route path={"/:group"} component={Home} />
          <Redirect to="/nogizaka46" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
