import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import News from "./views/news/news.js";
import Events from "./views/events/events.js";
import Gallery from "./views/gallery/gallery.js";
import Comments from "./views/comments/comments.js";
import Polls from "./views/polls/polls.js";
import Start from "./views/start/start.js";
import Login from "./views/login/login.js";
import CreateUser from "./views/login/createuser.js";
import Admin from "./views/admin/admin.js";
import AdminUser from "./views/admin/adminuser";
import NewsDetailed from "./views/news/newsdetailed";
import EventsDetailed from "./views/events/eventsdetailed";
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
      <div class="row">
        <div class="col-2">
          <img
            src="http://192.168.43.29:8888/emprenglobal/stuffs/logo1.png"
            style={{ width: "50px" }}
          />
        </div>
        <div class="nav">
          <Link to="/" className="col-1">
            Inicio
          </Link>

          <Link to="/news" className="col-1">
            Noticias
          </Link>

          <Link to="/events" className="col-1">
            Eventos
          </Link>

          <Link to="/gallery" className="col-1">
            Galerías
          </Link>

          <Link to="/polls" className="col-1">
            Encuestas
          </Link>

          <Link to="/comments" className="col-1">
            Comentarios
          </Link>

          <Link to="/login" className="col-1">
            Autenticarse
          </Link>
        </div>
        <div class="col-3">
          <UserMenu user={props.user} />
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Start
            galleries={props.galleries}
            news={props.news}
            events={props.events}
          />
        </Route>
        <Route path="/news">
          <News news={props.news} />
        </Route>
        <Route path="/events">
          <Events events={props.events} />
        </Route>
        <Route path="/gallery">
          <Gallery galleries={props.galleries} />
        </Route>
        <Route path="/polls">
          <Polls voted={props.voted} />
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
        <Route path="/conf">
          <AdminUser />
        </Route>
        <Route path="/newsdetailed/:id">
          <NewsDetailed />
        </Route>
        <Route path="/eventsdetailed/:id">
          <EventsDetailed />
        </Route>
        <Route path="/admin">
          <Admin user={props.user} />
        </Route>
      </Switch>
      <div class="row footer_top">
        <div class="col-4">
          <h3>INFORMACIÓN DE CONTACTO</h3>
          <p>
            Calzada Universidad, número 14418, Parque Industrial Internacional
            Tijuana. Tijuana, B. C
          </p>
          <p>664 -979 7500 al 04</p>
          <p>titulacion.fcatij@uabc.edu.mx</p>
        </div>
        <div class="col-4">
          <h3>HORARIO</h3>
          <p>Le atenderemos siempre</p>
          <p>Lunes-Viernes: 9am a 5pm</p>
          <p>Sábado: 10am a 2pm</p>
          <p>Domingo: Cerrado</p>
        </div>
        <div class="col-4 footer_img">
          <img src="http://192.168.43.29:8888/emprenglobal/stuffs/logo6.jpg"></img>
          <div>
            <img src="http://192.168.43.29:8888/emprenglobal/stuffs/logo3.jpg"></img>
            <br />
            <img src="http://192.168.43.29:8888/emprenglobal/stuffs/logo4.jpg"></img>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>© Copyright © 2021 EGRESADOS. Todos los derechos reservados.</p>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  galleries: state.galleries,
  news: state.news,
  events: state.events,
  voted: state.voted,
});

export default connect(mapStateToProps)(Emprenglobal);
