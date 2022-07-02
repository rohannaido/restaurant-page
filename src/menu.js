const menuItems = [
    {
        name: "Chicken Biryani",
        image: "./images/chicken-biryani.jpg",
        ingredient: "chicken, rice",
    },
    {
        name: "Mutton Biryani",
        image: "./images/mutton-biryani.jpg",
        ingredient: "mutton, rice",
    },
    {
        name: "Tandoori Chicken",
        image: "./images/tandoori-chicken.jpg",
        ingredient: "",
    },
    {
        name: "Grill Chicken",
        image: "./images/grilled-chicken.jpg",
        ingredient: "",
    },
    {
        name: "Chicken 65",
        image: "./images/chicken-65.jpg",
        ingredient: "",
    },
    {
        name: "Pepper Chicken",
        image: "./images/pepper-chicken.jpg",
        ingredient: "",
    },
];

const createMenuItem = (name, image, ingredient) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item-div")
    const itemHeading = document.createElement("h3");
    const itemImage = document.createElement("img");
    const itemIngredient = document.createElement("p");

    itemHeading.innerText = name;
    itemImage.src = image;
    itemIngredient.innerText = ingredient;
    
    menuItem.appendChild(itemHeading);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemIngredient);

    return menuItem;
}

const createMenu = () => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");
    
    menuItems.forEach((item) => {
        menuDiv.appendChild(createMenuItem(item.name, item.image, item.ingredient));
    })

    return menuDiv;
}


const loadMenu = () => {
    const main = document.querySelector("main");
    main.innerText = "";

    main.appendChild(createMenu());
}

export default loadMenu;