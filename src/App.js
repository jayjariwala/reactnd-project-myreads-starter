import React from "react";
import BookSelf from "./components/bookShelfs";
import SearchSelf from "./components/searchSelf";
import { Switch, Route, Link } from "react-router-dom";
import * as booksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfCategories: []
  };

  componentDidMount() {
    booksAPI.getAll().then(books => {
      const shelfCategories = ["none"];
      books.forEach(book => {
        !shelfCategories.includes(book.shelf) &&
          shelfCategories.push(book.shelf);
      });
      this.setState({
        books,
        shelfCategories
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <BookSelf
                shelfCategories={this.state.shelfCategories}
                books={this.state.books}
              />
            )}
          />
          <Route path="/search" component={() => <SearchSelf />} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
