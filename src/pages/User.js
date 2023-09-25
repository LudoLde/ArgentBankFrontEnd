import Header from "../components/Header";
import Footer from "../components/Footer";
import MainUser from "../components/User/MainUser";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function User() {
   const auth = useSelector((state) => state.auth);
   const navigate = useNavigate();
   console.log(auth);
   useEffect(() => {
      if (!auth.token) {
         navigate("/");
      }
   }, [auth.token, navigate]);

   return (
      <div>
         <Header />
         <MainUser />
         <Footer />
      </div>
   );
}

export default User;
