import { useContext } from "react";
import { RegisterUser } from "../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Todo from "../Components/Todo";
import '.././App.css'

function Home() {
  const { user, setUser } = useContext(RegisterUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser"); // clear on logout
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="home-guest">
        <h3>Please Login!</h3>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    );
  }

  return (
    <>
      <div className="home-header">
        <h1>{user.name}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <Todo />
      </div>
    </>
  );
}

export default Home;
