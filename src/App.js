import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Board from "./component/Board"
import CreatePost from "./component/CreatePost"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ViewPost from "./component/ViewPost";


function App(){
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/board">
            <Header></Header>
            <Board></Board>
          </Route>
          <Route path="/create">
            <Header></Header>
            <CreatePost></CreatePost>
          </Route>
          <Route path="/board_1">
            <Header></Header>
            <ViewPost id="1" date="2022-03-28" title="Title1" content="content1"></ViewPost>
          </Route>
          <Route path="/board_2">
            <Header></Header>
            <ViewPost id="2" date="2021-11-06" title="Title2" content="content2"></ViewPost>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
