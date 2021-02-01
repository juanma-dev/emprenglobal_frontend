import React, { useState, useEffect } from "react";
import store from "../../redux/store";
import { updateLogin, updateUser } from "../../redux/actions";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
import { SERVER_URL, SERVER_LOGIN } from "../../configuration.js";
import { fetchUserByName } from "../../fetches.js";

const userLogin = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [user, setUser] = useState(userLogin);
  const [loginStatus, setLoginStatus] = useState("");

  const submit = (e) => {
    e.preventDefault();
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
          setLoginStatus("");
        } else {
          setLoginStatus("Usario o contraseña incorrecta");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div class="container">
      <p>{loginStatus}</p>
      <form onSubmit={submit}>
        <div class="row">
          <div class="col-25">
            <label for="fname">Correo electrónico</label>
          </div>
          <div class="col-75">
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
          <div class="col-25">
            <label for="lname">Contraseña:</label>
          </div>
          <div class="col-75">
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
