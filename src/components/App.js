import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import StreamList from "./StreamList";
import StreamCreate from "./StreamCreate";
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";

import Header from "./Header";
import "../css/normalize.css";
import "../css/fonts.css";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header></Header>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/create" exact component={StreamCreate}></Route>
          <Route path="/edit/:id" exact component={StreamEdit}></Route>
          <Route path="/delete/:id" exact component={StreamDelete}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
