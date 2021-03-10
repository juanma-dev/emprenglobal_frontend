import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const VoteOption = ({ option, onValueChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={option.id}
        name="poll"
        value={option.id}
        onChange={onValueChange}
      />
      <label for={option.id}>{option.title}</label>
    </div>
  );
};

export { VoteOption as default };
