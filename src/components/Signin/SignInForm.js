import "/Users/ludzy/Desktop/ArgentBank-Frontend/argentbank/src/styles/components/Signin/SigninForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/actions";

function SignInForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const auth = useSelector((state) => state.auth);

   const navigate = useNavigate();

   const dispatch = useDispatch();

   const handleSubmit = async (event) => {
      event.preventDefault();

      dispatch(loginUser({ email, password }));
   };

   useEffect(() => {
      if (auth.token) {
         navigate("/profile");
      } else {
         setErrorMessage(auth.message);
      }
   }, [auth, navigate]);

   return (
      <section className="sign-in-content">
         <FontAwesomeIcon icon={faCircleUser} />
         <h1>Sign In</h1>
         <form noValidate onSubmit={handleSubmit}>
            <div className="input-wrapper">
               <label htmlFor="username">Username</label>
               <input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-wrapper">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-remember">
               <input type="checkbox" id="remember-me" />
               <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
               Sign In
            </button>
            {errorMessage ? <div className="errorMessage">{errorMessage}</div> : null}
         </form>
      </section>
   );
}

export default SignInForm;
