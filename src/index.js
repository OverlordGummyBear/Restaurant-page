import "./styles.css";
import loadMain from "./pages/main.js";
import loadAbout from "./pages/about.js";
import loadHome from "./pages/home.js";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(loadAbout());