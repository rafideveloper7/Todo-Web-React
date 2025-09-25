import React, { useState, useContext } from "react";
import { RegisterUser } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const { setUser } = useContext(RegisterUser);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Empty inputs");
      return;
    }

    const newUser = { name, email, password };

    // Pehle localStorage se purane users nikal lo
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Duplicate email check
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("Email already registered!");
      return;
    }

    // New user add karo
    users.push(newUser);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    setUser(newUser);
    alert("User registered successfully!");
    navigate("/login");
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register Page</h2>

      <div className="inputs">
        <label>Name :</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name"
        />
      </div>

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

      <div className="inputs">
        <input type="submit" value="Register" />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
}

export default Register;
