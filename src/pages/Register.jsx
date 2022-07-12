import { useState, useRef } from "react";
import "../styles/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const getStarted = () => {
    setEmail(emailRef.current.value);
  };
  const handleRegister = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="register__top">
        <div className="register__wrapper">
          <img
            className="register__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="register__loginButton">Sign In</button>
        </div>
      </div>
      <div className="register__container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="register__input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="register__registerButton" onClick={getStarted}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="register__input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button
              className="register__registerButton"
              onClick={handleRegister}
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Register;
