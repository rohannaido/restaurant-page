const createContact = () => {
    const contact = document.createElement("div");
    const number = document.createElement("p");
    const address = document.createElement("p");
    const map = document.createElement("img");

    contact.classList.add("contact-div");
    number.innerText = "📞 +91 98765 43210";
    address.innerText = "🏠 Plot No. 44, RTC X Rd, Opposite Sandhya Theatre, Jawahar Nagar, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020";
    map.src = "./images/map.png"

    contact.appendChild(number);
    contact.appendChild(address);
    contact.appendChild(map);

    return contact;
}

const loadContact = () => {
    const main = document.querySelector("main");
    main.innerText = "";
    main.appendChild(createContact());
}

export default loadContact;