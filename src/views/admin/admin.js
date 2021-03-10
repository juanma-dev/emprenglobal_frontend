import React, { useState, useEffect } from "react";
import store from "../../redux/store";
import { updateLogin, updateUser } from "../../redux/actions";
import { Redirect, useLocation } from "react-router-dom";
import { SERVER_URL, SERVER_LOGIN } from "../../configuration.js";
import { fetchUserByName } from "../../fetches.js";
import AdminGallery from "./admingallery";
import AdminEvents from "./adminevent";
import AdminNews from "./adminnews";
import AdminUser from "./adminuser";
import AdminPoll from "./adminpoll";

const userLogin = {
  username: "",
  password: "",
};

const Admin = (props) => {
  const location = useLocation();
  return (
    <div>
      {(props.user.authorities.some((a) => a.aname === "ROLE_ADMIN") && (
        <div>
          <AdminGallery />
          <AdminNews />
          <AdminEvents />
          <AdminPoll />
        </div>
      )) || <Redirect to={{ pathname: "/", state: { from: location } }} />}
    </div>
  );
};

export { Admin as default };
