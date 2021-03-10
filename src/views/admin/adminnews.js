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

const AdminNews = () => {
  /*Event*/
  const [newsHeader, setNewsHeader] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [newsText, setNewsText] = useState("");
  const [newsImage, setNewsImage] = useState({ src: "", file: "" });
  const [logError, setLogError] = useState("");
  const [logSuccess, setLogSuccess] = useState("");
  /* */

  const submitEvent = (e) => {
    e.preventDefault();
    setLogError("");
    setLogSuccess("");
    const token = store.getState().login.token;
    let formData = new FormData();

    formData.append("header", newsHeader);
    formData.append("date", newsDate);
    formData.append("text", newsText);
    formData.append("file", newsImage.file);

    fetch(SERVER_URL + "news", {
      method: "POST",
      body: formData,
      headers: {
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

  const onImageChange = (event, setsImageHooks) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setsImageHooks({ src: URL.createObjectURL(img), file: img });
    }
  };

  return (
    <div>
      <div class="container">
        <h2>Agregar Noticia</h2>
        <span class="log_error">{logError}</span>
        <span class="log_success">{logSuccess}</span>
        <br />
        <form onSubmit={submitEvent}>
          <div class="row">
            <div class="col-3">
              <textarea
                name="header"
                value={newsHeader}
                placeholder="Introduzca tíulo"
                onChange={(e) => setNewsHeader(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                name="date"
                value={newsDate}
                placeholder="Introduzca fecha"
                onChange={(e) => setNewsDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <textarea
                name="text"
                value={newsText}
                placeholder="Introduzca contenido"
                onChange={(e) => setNewsText(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <img src={newsImage.src} />
            </div>
            <input
              type="file"
              neme="newsImage"
              onChange={function (event) {
                onImageChange(event, setNewsImage);
              }}
            />
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export { AdminNews as default };
