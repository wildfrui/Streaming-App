import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./StreamList";
import StreamCreate from "./StreamCreate";
import Header from "./Header";
import "../css/normalize.css";
import "../css/fonts.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/create" exact component={StreamCreate}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
