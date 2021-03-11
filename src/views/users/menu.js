import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { SERVER_LOGOUT } from "../../configuration";
import store, { DEFAULT_LOGIN, DEFAULT_USER } from "../../redux/store";
import { updateUser, updateLogin } from "../../redux/actions";
import AdminUser from "../admin/adminuser";

const Menu = (props) => {
  return (
    <div id="menu" class="center" style={props.display}>
      <div>{props.user?.username}</div>
      <Link to="/conf">Configuración</Link>
      {props.user?.authorities.some((a) => a.aname === "ROLE_ADMIN") && (
        <Link to="/admin">Administración</Link>
      )}
      <a
        href="#"
        onClick={() => {
          store.dispatch(updateUser(DEFAULT_USER));
          store.dispatch(updateLogin(DEFAULT_LOGIN));
        }}
      >
        Salir
      </a>
    </div>
  );
};

export { Menu as default };
