import React, { useState, useEffect } from "react";
import store from "../../redux/store";
import { updateLogin, updateUser } from "../../redux/actions";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
import {
  SERVER_URL,
  SERVER_LOGIN,
  ERROR_UPLOAD_ELEMENT,
  SUCCESS_UPLOAD_ELEMENT,
} from "../../configuration.js";
import { fetchUserByName } from "../../fetches.js";

const userLogin = {
  username: "",
  password: "",
};

const AdminPoll = () => {
  /*Event*/
  const [pollTitle, setPollTitle] = useState("");
  const [pollDate, setPollDate] = useState("");
  const [pollOptions, setPollOptions] = useState([]);
  const [logError, setLogError] = useState("");
  const [logSuccess, setLogSuccess] = useState("");
  /* */

  const submitEvent = (e) => {
    e.preventDefault();
    setLogError("");
    setLogSuccess("");
    let o = pollOptions.split(",");
    const token = store.getState().login.token;
    let data = { title: pollTitle, date: pollDate, options: o };
    console.log(data);

    fetch(SERVER_URL + "poll", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          setLogSuccess(SUCCESS_UPLOAD_ELEMENT);
          console.log("It works");
        }
      })
      .catch((e) => {
        setLogError(ERROR_UPLOAD_ELEMENT);
        console.log(e);
      });
  };

  return (
    <div>
      <div class="container">
        <h2>Agregar Encuesta</h2>
        <span class="log_error">{logError}</span>
        <span class="log_success">{logSuccess}</span>
        <br />
        <form onSubmit={submitEvent}>
          <div class="row">
            <div class="col-3">
              <textarea
                name="header"
                value={pollTitle}
                placeholder="Introduzca tíulo"
                onChange={(e) => setPollTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                name="date"
                value={pollDate}
                placeholder="Introduzca fecha"
                onChange={(e) => setPollDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <p>Introduzca opciones separadas por una coma(,)</p>
            <div class="col-3">
              <textarea
                name="text"
                value={pollOptions}
                placeholder="Introduzca opciones"
                onChange={(e) => setPollOptions(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export { AdminPoll as default };
