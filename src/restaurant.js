import loadHome from "./home";

import loadContact from "./contact";

import smartphoneIcon from "./assets/img/icons/smartphone.png";

import adressIcon from "./assets/img/icons/location.png";

import EmailIcon from "./assets/img/icons/mail.png";

import facebookIcon from "./assets/img/icons/facebook.png";

import instagramIcon from "./assets/img/icons/instagram.png";

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
  const restaurantName = document.createElement("h2");
  restaurantName.classList.add("logo");
  restaurantName.innerText = "Hamza Kebab";

  const navBar = document.createElement("nav");

  const navHome = document.createElement("a");
  navHome.innerText = "Home";
  navHome.addEventListener("click", () => {
    loadHome();
  });

  const navMenu = document.createElement("a");
  navMenu.innerText = "Menu";

  const navContact = document.createElement("a");
  navContact.innerText = "Contact";

  navContact.addEventListener("click", () => {
    loadContact();
  });

  navHome.classList.add("nav-item");
  navHome.id = "nav-home";
  navMenu.classList.add("nav-item");
  navMenu.id = "nav-menu";
  navContact.classList.add("nav-item");
  navContact.id = "nav-contact";

  navBar.appendChild(navHome);
  navBar.appendChild(navMenu);
  navBar.appendChild(navContact);

  header.appendChild(restaurantName);
  header.appendChild(navBar);

  return header;
}

function createMain() {
  const main = document.createElement("main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const footerLogo = document.createElement("h4");
  footerLogo.classList.add("footer-logo");
  footerLogo.innerText = "Hamza Kebab";

  const footerInfoContainer = document.createElement("div");
  footerInfoContainer.classList.add("footer-info-container");

  //const footerContactsContainer = document.createElement("div");

  const footerPhone = document.createElement("div");
  footerPhone.classList.add("footer-info-row", "footer-phone");

  const footerPhoneIcon = document.createElement("img");
  footerPhoneIcon.classList.add("footer-icon");
  footerPhoneIcon.src = smartphoneIcon;

  const footerPhoneText = document.createElement("p");
  footerPhoneText.classList.add("footerInfoText");
  footerPhoneText.innerText = "789 789 789";

  const footerAdress = document.createElement("div");
  footerAdress.classList.add("footer-info-row", "footer-adress");

  const footerAddressIcon = document.createElement("img");
  footerAddressIcon.classList.add("footer-icon");
  footerAddressIcon.src = adressIcon;

  const footerAdressText = document.createElement("p");
  footerAdressText.innerHTML = "Dammtorstraße 23<br/> 20354 Hamburg";

  const footerEmail = document.createElement("div");
  footerEmail.classList.add("footer-info-row", "footer-email");

  const footerEmailIcon = document.createElement("img");
  footerEmailIcon.classList.add("footer-icon");
  footerEmailIcon.src = EmailIcon;

  const footerEmailText = document.createElement("p");
  footerEmailText.classList.add("footerInfoText");
  footerEmailText.innerText = "contact@Hamza.com";

  const footerFacebook = document.createElement("div");
  footerFacebook.classList.add("footer-info-row", "footer-facebook");

  const footerFacebookIcon = document.createElement("img");
  footerFacebookIcon.classList.add("footer-icon");
  footerFacebookIcon.src = facebookIcon;

  const footerFacebookLink = document.createElement("a");
  footerFacebookLink.classList.add("footer-link");
  footerFacebookLink.innerText = "facebook.com/HamzaKebab";
  footerFacebookLink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const footerInstagram = document.createElement("div");
  footerInstagram.classList.add("footer-info-row", "footer-instagram");

  const footerInstagramIcon = document.createElement("img");
  footerInstagramIcon.classList.add("footer-icon");
  footerInstagramIcon.src = instagramIcon;

  const footerInstagramLink = document.createElement("a");
  footerInstagramLink.classList.add("footer-link");
  footerInstagramLink.innerText = "@Hamza_Kebab";
  footerInstagramLink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  footerFacebook.append(footerFacebookIcon, footerFacebookLink);
  footerInstagram.append(footerInstagramIcon, footerInstagramLink);

  footerPhone.append(footerPhoneIcon, footerPhoneText);
  footerAdress.append(footerAddressIcon, footerAdressText);
  footerEmail.append(footerEmailIcon, footerEmailText);

  footerInfoContainer.append(
    footerFacebook,
    footerInstagram,
    footerPhone,
    footerAdress,
    footerEmail
  );

  //footerInfoContainer.append(footerContactsContainer, footerSocialsContainer);

  footer.append(footerLogo, footerInfoContainer);

  return footer;
}

export function loadRestaurantPage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();
}

export default loadRestaurantPage;
