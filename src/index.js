import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import User from "./pages/User";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}>
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<User />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   </Provider>
);
