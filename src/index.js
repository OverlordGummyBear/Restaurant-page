import "./styles.css";
import loadMain from "./pages/main.js";
import loadAbout from "./pages/about.js";
import loadHome from "./pages/home.js";

const contentDiv = document.querySelector("#content");

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        contentDiv.textContent = "";

        if(button.value === "home") contentDiv.appendChild(loadHome());
        else if(button.value === "about") contentDiv.appendChild(loadAbout());
        else contentDiv.appendChild(loadMain());
    })
})

contentDiv.appendChild(loadHome());