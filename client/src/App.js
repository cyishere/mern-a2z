/*
 * @Author: chen yang
 * @Date: 2020-08-27 14:15:22
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 20:38:14
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

const App = () => {
  return (
    <Router>
      <section className="section">
        <Route exact path="/" component={ShowBookList} />
        <Route path="/create-book" component={CreateBook} />
        <Route path="/edit-book/:id" component={UpdateBookInfo} />
        <Route path="/show-book/:id" component={ShowBookDetails} />
      </section>
    </Router>
  );
};

export default App;
