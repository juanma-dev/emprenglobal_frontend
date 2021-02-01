import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import News from "./views/news/news.js";
import Events from "./views/events/events.js";
import Gallery from "./views/gallery/gallery.js";
import Comments from "./views/comments/comments.js";
import Polls from "./views/polls/polls.js";
import Start from "./views/start.js";
import Login from "./views/login/login.js";
import CreateUser from "./views/login/createuser.js";
import Admin from "./views/admin/admin.js";
import { connect } from "react-redux";
import {
  fetchEvents,
  fetchNews,
  fetchGalleries,
  fetchPolls,
  fetchComments,
  fetchOptions,
} from "./fetches.js";
import UserMenu from "./views/users/usermenu";
import "./index.css";

const Emprenglobal = (props) => {
  useEffect(() => {
    fetchEvents();
    fetchNews();
    fetchGalleries();
    fetchPolls();
    fetchComments();
    fetchOptions();
  }, []);
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/news">Noticias</Link>
          </li>
          <li>
            <Link to="/events">Eventos</Link>
          </li>
          <li>
            <Link to="/gallery">Galerías</Link>
          </li>
          <li>
            <Link to="/polls">Encuestas</Link>
          </li>
          <li>
            <Link to="/comments">Comentarios</Link>
          </li>
          <li>
            <Link to="/login">Autenticarse</Link>
          </li>
        </ul>
        <div id="user_component">
          <UserMenu user={props.user} />
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/polls">
          <Polls />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/register">
          <CreateUser />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Emprenglobal);
