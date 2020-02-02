import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Music from "./components/Music";
import Members from "./components/Members";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>深谷の嫁候補リスト</p>
      </header>
      {/* グループのクラス */}
      <div>乃木坂46</div>
      <div>欅坂46</div>
      <div>ひらがなけやき</div>
      {/* 紹介コンテンツのクラス */}
      <div>メンバー紹介</div>
      <div>楽曲紹介</div>
      {/* 表示される内容 */}
      <Switch>
        <Route path="/:group/music" component={Music} />
        <Route path="/:group/members" component={Members} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
