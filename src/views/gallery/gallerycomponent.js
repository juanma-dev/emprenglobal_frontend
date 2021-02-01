import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const GalleryComponent = (props) => {
  console.log(props.gallery);
  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <img src={props.gallery.photoPath}></img>
      </div>
      <div style={{ display: "inline-block" }}>
        <header>{props.gallery.header}</header>
      </div>
    </div>
  );
};

export { GalleryComponent as default };
