import "./login.scss"

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";

// Assets
// import Worldly from "./images/Worldly.jpg"
import logo from "../../Assets/logo.png"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "Admin",
    password: "Admin",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
            
            <div className="lContainer">
            <h1> ADMIN</h1>
                
                <img className="logol" src={logo} alt="" />
                
                <input type="text" className="lInput" placeholder="username" id="username" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="password" id="password" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
                

                {error && <span className="message">{error.message}....</span>}
            </div>
        </div>
  );
};

export default Login;