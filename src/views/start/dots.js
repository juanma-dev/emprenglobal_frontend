import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Dots = (props) => {
  return (
    <span
      class="dots"
      style={props.conf}
      onClick={() => {
        props.setConf(props.setActive(props.index));
      }}
    ></span>
  );
};

export { Dots as default };
