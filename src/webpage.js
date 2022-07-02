import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createHeader = () => {
    const header = document.createElement("header");
    
    const heading = document.createElement("h1");
    heading.innerText = "Bawarchi";
    heading.className = "restaurant-name-heading"
    
    content.appendChild(header);
    header.appendChild(heading);

    header.appendChild(createNavBar());

    return header;
}

const createNavBar = () => {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("nav-btn");
    // homeButton.classList.add("active");
    homeButton.addEventListener("click", () => {
        loadHome();
        setActiveButton(homeButton);
    })

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("nav-btn");
    menuButton.addEventListener("click", () => {
        loadMenu();
        setActiveButton(menuButton);
    })

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("nav-btn");
    contactButton.addEventListener("click", () => {
        loadContact();
        setActiveButton(contactButton);
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

const createMain = () => {
    const main = document.createElement("main");
    return main;
}

const createFooter = () => {
    const footer = document.createElement("footer");

    footer.innerText = "Copyright © 2022 rohannaido";
    return footer;
}

const setActiveButton = (button) => {
    const navButtons = document.querySelectorAll(".nav-btn");
    
    navButtons.forEach((btn) => {
        if(btn.classList.contains("active")){
            btn.classList.remove("active");
        }
    })

    button.classList.add("active");
}

const initializeWebpage = () => {
    const content = document.querySelector("div#content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nav-btn"));
    loadHome();
}

export default initializeWebpage;