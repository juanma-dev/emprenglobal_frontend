import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import GalleryComponent from "./gallerycomponent";
import store from "../../redux/store";

const GalleryObject = {
  picPath: "",
};

const galleryArray = [{ picPath: "a" }];

const Gallery = (props) => {
  return (
    <div>
      <span>Galería</span>
      <ul>
        {props.galleries.map((g, index) => (
          <li key={index}>
            <GalleryComponent gallery={g} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Gallery as default };
