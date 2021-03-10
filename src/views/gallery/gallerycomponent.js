import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const GalleryComponent = (props) => {
  return (
    <div>
      <div>
        <img class="img_ge" src={props.gallery.photoPath}></img>
      </div>
      <div>
        <header>{props.gallery.header}</header>
      </div>
    </div>
  );
};

export { GalleryComponent as default };
