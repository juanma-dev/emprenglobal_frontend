import React, { useState, useEffect } from "react";
import Menu from "./menu";

const UserComponent = (props) => {
  return (
    <span>
      <img id="user_img" src={props.user.photoPath} alt="User Pic"></img>
    </span>
  );
};

export { UserComponent as default };
