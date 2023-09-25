import "../styles/pages/Error.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Error() {
   return (
      <div className="error-container">
         <Header />
         <main className="main error-main">
            <div className="error">
               <h2>Error 404</h2>
               <p>Oups! La page que vous demandez n'existe pas.</p>
               <Link to="/">Retourner sur la page d'acceuil</Link>
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default Error;
