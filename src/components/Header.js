import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/argentBankLogo.webp";
import "/Users/ludzy/Desktop/ArgentBank-Frontend/argentbank/src/styles/Header.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../features/actions";
import { useSelector } from "react-redux";

function Header() {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const auth = useSelector((state) => state.auth);

   const logoutHandler = () => {
      dispatch(logoutRequest());
   };

   return (
      <nav className="main-nav">
         <NavLink to="/">
            <img src={logo} alt="Logo ArgentBank" />
            <h1 className="sr-only">Argent Bank</h1>
         </NavLink>

         {!auth.token ? (
            <div>
               <NavLink to="/login" className="main-nav-item">
                  <FontAwesomeIcon icon={faCircleUser} className="main-nav-item" />
                  Sign In
               </NavLink>
            </div>
         ) : (
            ""
         )}

         {auth.token ? (
            <div>
               <NavLink to="/profile" className="main-nav-item">
                  <FontAwesomeIcon icon={faCircleUser} className="main-nav-item" />
                  {user.firstName}
               </NavLink>
               <NavLink onClick={logoutHandler} to="/" className="main-nav-item">
                  <FontAwesomeIcon icon={faRightFromBracket} className="main-nav-item" />
                  Sign Out
               </NavLink>
            </div>
         ) : (
            ""
         )}
      </nav>
   );
}

export default Header;
