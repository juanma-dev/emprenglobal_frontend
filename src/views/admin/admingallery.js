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

const AdminGallery = () => {
  /*Gallery*/
  const [galleryHeader, setGalleryHeader] = useState("");
  const [galleryImage, setGalleryImage] = useState({ src: "", file: "" });
  /* */

  const submitGallery = (e) => {
    e.preventDefault();
    const token = store.getState().login.token;
    let formData = new FormData();

    formData.append("header", galleryHeader);
    formData.append("file", galleryImage.file);

    fetch(SERVER_URL + "gallery", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("It works");
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
        <h2>Agregar foto en Galería</h2>
        <form onSubmit={submitGallery}>
          <div class="row">
            <div class="col-25">
              <textarea
                name="message"
                alue={galleryHeader}
                placeholder="Introduzca tíulo de foto"
                onChange={(e) => setGalleryHeader(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <img src={galleryImage.src} />
            </div>
            <input
              type="file"
              neme="galleryImage"
              onChange={function (event) {
                onImageChange(event, setGalleryImage);
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

export { AdminGallery as default };
