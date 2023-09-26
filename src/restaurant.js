import _ from "lodash";
//import Icon from "./assets/webpack-Icon.png";

//import Data from "./data/data.xml";

function component() {
  // const element = document.createElement("div");
  // const btn = document.createElement("button");
  // // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.classList.add("hello");
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  // btn.innerHTML = "click me and check the console";
  // //btn.onclick = printMe;
  // element.appendChild(btn);
  // console.log(Data);
  // return element;
  loadPage();
}

function createHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  restaurantName.innerText = "Hamza Kebab";

  const navBar = document.createElement("nav");

  const navHome = document.createElement("a");
  navHome.innerText = "Home";

  const navMenu = document.createElement("a");
  navMenu.innerText = "Menu";

  const navContact = document.createElement("a");
  navContact.innerText = "Contact";

  navHome.classList.add("nav-item");
  navMenu.classList.add("nav-item");
  navContact.classList.add("nav-item");

  navBar.appendChild(navHome);
  navBar.appendChild(navMenu);
  navBar.appendChild(navContact);

  header.appendChild(restaurantName);
  header.appendChild(navBar);

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.innerText = "main";
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const contactsContainer = document.createElement("div");
  contactsContainer.innerText = "nr: 666 666 666";
  footer.appendChild(contactsContainer);

  return footer;
}

export function loadRestaurantPage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default loadRestaurantPage;
