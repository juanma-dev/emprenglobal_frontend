import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const GalleryImg = (props) => {
  return (
    <div>
      <img
        class="slides-img"
        src={props.gallery.photoPath}
        style={props.conf}
      />
    </div>
  );
};

export { GalleryImg as default };
