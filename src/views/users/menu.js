import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { SERVER_LOGOUT } from "../../configuration";
import store, { DEFAULT_LOGIN, DEFAULT_USER } from "../../redux/store";
import { updateUser, updateLogin } from "../../redux/actions";
import AdminUser from "../admin/adminuser";

const Menu = (props) => {
  return (
    <ul id="menu_ul" style={props.display}>
      <li>{props.user?.username}</li>
      <li>
        <Link to="/conf">Configuración</Link>
      </li>
      {props.user?.authorities.some((a) => a.aname === "ROLE_ADMIN") && (
        <li>
          <Link to="/admin">Administración</Link>
        </li>
      )}
      <li>
        <a
          href="#"
          onClick={() => {
            store.dispatch(updateUser(DEFAULT_USER));
            store.dispatch(updateLogin(DEFAULT_LOGIN));
          }}
        >
          Salir
        </a>
      </li>
    </ul>
  );
};

export { Menu as default };
