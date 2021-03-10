import React, { useState, useEffect } from "react";
import store from "../../redux/store";
import { updateLogin, updateUser } from "../../redux/actions";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
import {
  SERVER_URL,
  SERVER_LOGIN,
  WRONG_CHECK_PASS,
  UPDATE_PASS_SUCCESS,
} from "../../configuration.js";
import { fetchUserByName } from "../../fetches.js";
import AdminGallery from "./admingallery";

const AdminUser = () => {
  const [user, setUser] = useState(store.getState().user);
  const [logError, setLogError] = useState("");
  const [logSuccess, setLogSuccess] = useState("");
  const [image, setImage] = useState({ src: "", file: "" });
  const [checkPass, setCheckPass] = useState("");

  const submitUser = (e, isPass) => {
    e.preventDefault();
    const token = store.getState().login.token;
    let headers = {
      Authorization: token,
    };
    let url = SERVER_URL + "user";
    let data;

    if (isPass) {
      setLogError("");
      setLogSuccess("");
      setLogError(checkPass === user.password ? "" : WRONG_CHECK_PASS);
      data = JSON.stringify({ id: user.id, password: user.password });
      headers["Content-type"] = "application/json";
    } else {
      url += "/" + user.id;
      data = new FormData();
      data.append("file", image.file);
    }

    fetch(url, {
      method: "PUT",
      body: data,
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          setLogSuccess(UPDATE_PASS_SUCCESS);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onImageChange = (event, setsImageHooks) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setsImageHooks({ src: URL.createObjectURL(img), file: img });
    }
  };

  return (
    <div>
      <div class="container">
        <h2>Cambiar contraseña</h2>
        <span class="log_error">{logError}</span>
        <span class="log_success">{logSuccess}</span>
        <br />
        <form
          onSubmit={function (e) {
            submitUser(e, "true");
          }}
        >
          <div class="row">
            <div class="col-3">
              <label for="fname">Correo electrónico</label>
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
              <label for="lname">Nueva contraseña:</label>
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
            <div class="col-3">
              <label for="lname">Comprobar nueva contraseña:</label>
            </div>
            <div class="col-9">
              <input
                type="password"
                name="password"
                value={checkPass}
                placeholder="Introduzca su contraseña"
                onChange={(e) => setCheckPass(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <br />
      <br />
      <div class="container">
        <h2>Cambiar foto de perfil</h2>
        <div>
          <form onSubmit={submitUser}>
            <img class="img_ge" src={image.src} />
            <h4>Actualice su imagen</h4>
            <input
              type="file"
              name="myImage"
              onChange={function (event) {
                onImageChange(event, setImage);
              }}
            />
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { AdminUser as default };
