import Footer from "../components/Footer";
import Header from "../components/Header";
import SignInForm from "../components/Signin/SignInForm";
import "../styles/pages/Signin.css";

function SignIn() {
   return (
      <div className="sign-in-container">
         <Header />
         <main className="main bg-dark">
            <SignInForm />
         </main>
         <Footer />
      </div>
   );
}

export default SignIn;
