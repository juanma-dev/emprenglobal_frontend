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

const AdminEvent = () => {
  /*Event*/
  const [eventHeader, setEventHeader] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventText, setEventText] = useState("");
  const [eventImage, setEventImage] = useState({ src: "", file: "" });
  const [logError, setLogError] = useState("");
  const [logSuccess, setLogSuccess] = useState("");
  /* */

  const submitEvent = (e) => {
    e.preventDefault();
    setLogError("");
    setLogSuccess("");
    const token = store.getState().login.token;
    let formData = new FormData();

    formData.append("header", eventHeader);
    formData.append("date", eventDate);
    formData.append("location", eventLocation);
    formData.append("text", eventText);
    formData.append("file", eventImage.file);

    fetch(SERVER_URL + "event", {
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
        <h2>Agregar Evento</h2>
        <span class="log_error">{logError}</span>
        <span class="log_success">{logSuccess}</span>
        <br />
        <form onSubmit={submitEvent}>
          <div class="row">
            <div class="col-3">
              <textarea
                name="header"
                value={eventHeader}
                placeholder="Introduzca tíulo"
                onChange={(e) => setEventHeader(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                name="date"
                value={eventDate}
                placeholder="Introduzca fecha"
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                name="location"
                alue={eventLocation}
                placeholder="Introduzca lugar de evento"
                onChange={(e) => setEventLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <textarea
                name="text"
                value={eventText}
                placeholder="Introduzca contenido"
                onChange={(e) => setEventText(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <img class="img_ge" src={eventImage.src} />
            </div>
            <input
              type="file"
              neme="eventImage"
              onChange={function (event) {
                onImageChange(event, setEventImage);
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

export { AdminEvent as default };
