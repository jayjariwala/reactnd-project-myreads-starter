import React, { Component } from "react";
import BookShelf from "./bookShelf";

export default class bookSelf extends Component {
  render() {
    const { shelfCategories, books } = this.props;
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              {shelfCategories.map(
                shelf => shelf !== "none" && <BookShelf title={shelf} />
              )}
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.props.history.push("/search")}></button>
          </div>
        </div>
      </div>
    );
  }
}
