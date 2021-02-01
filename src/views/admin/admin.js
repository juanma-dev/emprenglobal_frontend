import React, { useState, useEffect } from "react";
import store from "../../redux/store";
import { updateLogin, updateUser } from "../../redux/actions";
import { BrowserRouter, Link, Route, Switch, Router } from "react-router-dom";
import { SERVER_URL, SERVER_LOGIN } from "../../configuration.js";
import { fetchUserByName } from "../../fetches.js";
import AdminGallery from "./admingallery";
import AdminUser from "./adminuser";

const userLogin = {
  username: "",
  password: "",
};

const Admin = () => {
  return (
    <div>
      <AdminUser />
      <br />
      <br />
      <AdminGallery />
    </div>
  );
};

export { Admin as default };
