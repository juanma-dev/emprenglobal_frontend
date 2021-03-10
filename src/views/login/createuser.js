import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const userPrint = {
  name: "",
  email: "",
  password: "",
  errors: { name: "" },
};

const CreateUser = (props) => {
  const [user, setUser] = useState(userPrint);

  const submit = (e) => {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setUser(json.user));
  };

  return (
    <div class="container">
      <form onSubmit={submit}>
        <br />
        <label for="username">Usuario:</label>
        <br />
        <input
          type="text"
          name="username"
          value={user.name}
          placeholder="Nombre de usuario"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        {user.errors.name && <p>{user.errors.name}</p>}
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Introduzca su email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        {user.errors.name && <p>{user.errors.name}</p>}
        <br />
        <label for="password">Contraseña:</label>
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Introduzca su contraseña"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        {user.errors.name && <p>{user.errors.name}</p>}
        <br />
        <br />
        <input type="submit" name="Sign Up" />
        <Link to="/login">Iniciar sesión</Link>
      </form>
    </div>
  );
};

export { CreateUser as default };
