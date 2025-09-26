import React, { useState, useContext } from "react";
import { RegisterUser } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import ".././app.css";

function Login() {
  const { setUser } = useContext(RegisterUser);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      return alert("Invalid email or password!");
    }

    // Email aur password match karo
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      // localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); // store logged-in user
      alert(`Login success! Welcome ${foundUser.name}`);
      navigate("/home");
    } else {
      alert("No users found! Please register first.");
    }
  };

  return (
    <form className="log-reg-form" onSubmit={onLogin}>
      <h2>Login Page</h2>

      <div className="inputs">
        <label>Email :</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email address"
        />
      </div>

      <div className="inputs">
        <label>Password :</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </div>

      <div className="inputs submit-p">
        <input className="submit" type="submit" value="Login" />
        <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </div>
    </form>
  );
}

export default Login;
