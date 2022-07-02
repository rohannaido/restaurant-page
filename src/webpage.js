
const mainBackground = () => {
    // content
}

const createHeader = () => {
    const header = document.createElement("header");
    
    const heading = document.createElement("h1");
    heading.innerText = "Mozzafiato";
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

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("nav-btn");

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("nav-btn");

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

const initializeWebpage = () => {
    const content = document.querySelector("div#content");
    
    content.appendChild(createHeader());
}

export default initializeWebpage;