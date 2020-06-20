import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//creating a const that value is reference to react-dom
import { render } from "react-dom";
//import HomePage from "./components/HomePage.js";
//import AboutPage from "./components/AboutPage.js";
import App from "./components/App.js";

render(<App />, document.getElementById("root"));
