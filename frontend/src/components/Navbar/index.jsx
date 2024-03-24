import React from "react";
import "./styles.scss";
import logo from "../../assets/images/Logo.png";
//import { useLocation, useNavigate } from "react-router-dom";
import logoutImg from "../../assets/images/logout.png";
import loginImg from "../../assets/images/login.png";
import profileImg from "../../assets/images/profile.png";

function Navbar() {
  const user = true;
  const login = true;
  const logout = false;
  //const navigate = useNavigate();
  //const location = useLocation();
  

  const handleProfile = () => {
    //navigate("/profile");
  };

  return (
    <nav>
      <section></section>
      <section className="logo">
        <img src={logo} alt="Beat Boss" width="100%" />
      </section>
      <section className="profileNav">
        /*{user === "/profile" ? (
          <button onClick={user/*async () => await logout()*/} >
            <img width="60" height="60" src={logoutImg} alt="logout" />
          </button>
        ) : user ? (
          <button onClick={handleProfile}>
            <img width="70" height="70" src={profileImg} alt="profile" style={{marginRight: "-.4rem"}} />
          </button>
        ) : (
          <button onClick={handleProfile/*() => navigate('/register')*/}>
            <img width="60" height="60" src={loginImg} alt="login" />
          </button>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
