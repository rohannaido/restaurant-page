const createHome = () => {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");
    
    const subtitle1 = document.createElement("p");
    subtitle1.classList.add("subtitle")
    subtitle1.innerText = "Best Biryani in your Country"
    
    const subtitle2 = document.createElement("p");
    subtitle2.classList.add("subtitle")
    subtitle2.innerText = "Made with passion since 1950."
    
    const image = document.createElement("img");
    image.src = "./images/bawarchi-home.jpg"
    
    const subtitle3 = document.createElement("p");
    subtitle3.classList.add("subtitle")
    subtitle3.innerText = "Order online or visit us!"
    
    homeDiv.appendChild(subtitle1);
    homeDiv.appendChild(subtitle2);
    homeDiv.appendChild(image);
    homeDiv.appendChild(subtitle3);

    return homeDiv;
}

const loadHome = () => {
    const main = document.querySelector("main");
    main.innerText = "";
    main.appendChild(createHome());
}

export default loadHome;