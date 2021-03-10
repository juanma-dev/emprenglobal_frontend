import React, { useState, useEffect } from "react";
import store from "../../redux/store";
import { updateLogin, updateUser } from "../../redux/actions";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
import {
  SERVER_URL,
  SERVER_LOGIN,
  WRONG_USER_PASS,
  LOGIN_SUCCESS,
} from "../../configuration.js";
import { fetchUserByName } from "../../fetches.js";

const userLogin = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [user, setUser] = useState(userLogin);
  const [logError, setLogError] = useState("");
  const [logSuccess, setLogSuccess] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setLogError("");
    setLogSuccess("");
    fetch(SERVER_LOGIN, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "access-control-expose-headers": "Authorization",
      },
    })
      .then((response) => {
        if (response.ok) {
          const token = response.headers.get("Authorization");
          store.dispatch(updateLogin({ token: token }));
          fetchUserByName(user.username);
          setLogSuccess(LOGIN_SUCCESS);
        } else {
          setLogError(WRONG_USER_PASS);
        }
      })
      .catch((e) => {
        setLogError(WRONG_USER_PASS);
        console.log(e);
      });
  };

  return (
    <div class="container">
      <span class="log_error">{logError}</span>
      <span class="log_success">{logSuccess}</span>
      <br />
      <form onSubmit={submit}>
        <div class="row">
          <div class="col-3">
            <label for="fname">User:</label>
          </div>
          <div class="col-9">
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="Nombre de usuario"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="lname">Password:</label>
          </div>
          <div class="col-9">
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Introduzca su contraseña"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit" />
        </div>
        <Link to="/register">Registrar</Link>
      </form>
    </div>
  );
};

export { Login as default };
