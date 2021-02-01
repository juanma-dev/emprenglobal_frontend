import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const NewsComponent = (props) => {
  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <p>{props.new.picPath}</p>
      </div>
      <div style={{ display: "inline-block" }}>
        <header>{props.new.header}</header>
        <header>{props.new.date}</header>

        <p>{props.new.location}</p>
      </div>
    </div>
  );
};

export { NewsComponent as default };
