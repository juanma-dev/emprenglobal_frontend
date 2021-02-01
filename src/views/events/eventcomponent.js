import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const EventComponent = (props) => {
  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <p>{props.event.photoPath}</p>
      </div>
      <div style={{ display: "inline-block" }}>
        <header>{props.event.header}</header>
        <header>{props.event.date}</header>

        <p>{props.event.text}</p>
      </div>
    </div>
  );
};

export { EventComponent as default };
