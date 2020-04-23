import React from "react";
import BookSelf from "./components/bookSelf";
import SearchSelf from "./components/searchSelf";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact component={BookSelf} />
          <Route path="/search" component={SearchSelf} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
