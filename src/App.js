import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SubjectList from "./components/subjects-list.component";
import EditSubject from "./components/edit-subjects.components";
import CreateSubject from "./components/create-subject.component";
import CreateUser from "./components/create-user.component";
import HomePage from "./components/HomePage";
import SessionsList from "./components/sessions-list.component";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/subjects-list" component={SubjectList} />
        <Route path="/edit/:id" component={EditSubject} />
        <Route path="/create" component={CreateSubject} />
        <Route path="/user" exct component={CreateUser} />
        <Route path="/sessions" exact component={SessionsList} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
