import styleContact from "./css/styleContact.css";

import smartphoneIcon from "./assets/img/icons/smartphone.png";

import adressIcon from "./assets/img/icons/location.png";

import EmailIcon from "./assets/img/icons/mail.png";

import facebookIcon from "./assets/img/icons/facebook.png";

import instagramIcon from "./assets/img/icons/instagram.png";

function createContact() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const contactMainContainer = document.createElement("div");

  const contactMap = document.createElement("iframe");
  contactMap.classList.add("contact-map");
  contactMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9480.144025860072!2d9.981466449839186!3d53.55712470251014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f18153098ab%3A0x79a334b868662a03!2sHamza%20Kebab!5e0!3m2!1spl!2spl!4v1696161306191!5m2!1spl!2spl";

  const contactHeader = document.createElement("h1");
  contactHeader.classList.add("contact-header");
  contactHeader.innerText = "Contact";

  const contactText = document.createElement("p");
  contactText.classList.add("contact-text");
  contactText.innerText = "Order by phone or visit us!";

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.classList.add("contact-info-container");

  const contactPhoneIcon = document.createElement("img");
  contactPhoneIcon.classList.add("contact-icon");
  contactPhoneIcon.src = smartphoneIcon;

  const contactPhoneText = document.createElement("p");
  contactPhoneText.classList.add("contact-info-text");
  contactPhoneText.innerText = "789 789 789";

  const contactAddressIcon = document.createElement("img");
  contactAddressIcon.classList.add("contact-icon");
  contactAddressIcon.src = adressIcon;

  const contactAdressText = document.createElement("p");
  contactAdressText.classList.add("contact-info-text");
  contactAdressText.innerHTML = "Dammtorstraße 23<br/> 20354 Hamburg";

  const contactEmailIcon = document.createElement("img");
  contactEmailIcon.classList.add("contact-icon");
  contactEmailIcon.src = EmailIcon;

  const contactEmailText = document.createElement("p");
  contactEmailText.classList.add("contact-info-text");
  contactEmailText.innerText = "contact@Hamza.com";

  const socialsHeader = document.createElement("h3");
  socialsHeader.classList.add("socials-header");
  socialsHeader.innerText = "Join our Socials!";

  const contactFacebookIcon = document.createElement("img");
  contactFacebookIcon.classList.add("contact-icon");
  contactFacebookIcon.src = facebookIcon;

  const contactFacebookLink = document.createElement("a");
  contactFacebookLink.classList.add("contact-link");
  contactFacebookLink.innerText = "facebook.com/HamzaKebab";
  contactFacebookLink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const contactInstagramIcon = document.createElement("img");
  contactInstagramIcon.classList.add("contact-icon");
  contactInstagramIcon.src = instagramIcon;

  const contactInstagramLink = document.createElement("a");
  contactInstagramLink.classList.add("contact-link");
  contactInstagramLink.innerText = "@Hamza_Kebab";
  contactInstagramLink.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const openingHoursContainer = document.createElement("div");
  openingHoursContainer.classList.add("opening-hours-container");

  const openingHoursHeader = document.createElement("h2");
  openingHoursHeader.classList.add("opening-hours-header");
  openingHoursHeader.innerText = "Opening hours";

  const openingMonday = document.createElement("p");
  openingMonday.classList.add("opening-day");
  openingMonday.innerText = "Monday";

  const openingHoursMonday = document.createElement("p");
  openingHoursMonday.classList.add("opening-hours");
  openingHoursMonday.innerText = "10:00 - 22:00";

  const openingTuesday = document.createElement("p");
  openingTuesday.classList.add("opening-day");
  openingTuesday.innerText = "Tuesday";

  const openingHoursTuesday = document.createElement("p");
  openingHoursTuesday.classList.add("opening-hours");
  openingHoursTuesday.innerText = "10:00 - 22:00";

  const openingWednesday = document.createElement("p");
  openingWednesday.classList.add("opening-day");
  openingWednesday.innerText = "Wednesday";

  const openingHoursWednesday = document.createElement("p");
  openingHoursWednesday.classList.add("opening-hours");
  openingHoursWednesday.innerText = "10:00 - 22:00";

  const openingThursday = document.createElement("p");
  openingThursday.classList.add("opening-day");
  openingThursday.innerText = "Thursday";

  const openingHoursThursday = document.createElement("p");
  openingHoursThursday.classList.add("opening-hours");
  openingHoursThursday.innerText = "10:00 - 22:00";

  const openingFriday = document.createElement("p");
  openingFriday.classList.add("opening-day");
  openingFriday.innerText = "Friday";

  const openingHoursFriday = document.createElement("p");
  openingHoursFriday.classList.add("opening-hours");
  openingHoursFriday.innerText = "10:00 - 22:00";

  const openingSaturday = document.createElement("p");
  openingSaturday.classList.add("opening-day");
  openingSaturday.innerText = "Saturday";

  const openingHoursSaturday = document.createElement("p");
  openingHoursSaturday.classList.add("opening-hours");
  openingHoursSaturday.innerText = "11:00 - 22:00";

  const openingSunday = document.createElement("p");
  openingSunday.classList.add("opening-day", "opening-sunday");
  openingSunday.innerText = "Sunday";

  const openingHoursSunday = document.createElement("p");
  openingHoursSunday.classList.add("opening-hours", "opening-hours-sunday");
  openingHoursSunday.innerText = "closed";

  contactInfoContainer.append(
    contactPhoneIcon,
    contactPhoneText,
    contactAddressIcon,
    contactAdressText,
    contactEmailIcon,
    contactEmailText,
    socialsHeader,
    contactFacebookIcon,
    contactFacebookLink,
    contactInstagramIcon,
    contactInstagramLink,
    contactMap
  );

  openingHoursContainer.append(
    openingMonday,
    openingHoursMonday,
    openingTuesday,
    openingHoursTuesday,
    openingWednesday,
    openingHoursWednesday,
    openingThursday,
    openingHoursThursday,
    openingFriday,
    openingHoursFriday,
    openingSaturday,
    openingHoursSaturday,
    openingSunday,
    openingHoursSunday
  );

  mainContent.append(
    contactHeader,
    contactText,
    contactInfoContainer,
    openingHoursHeader,
    openingHoursContainer
  );

  return mainContent;
}

function loadContact() {
  const main = document.querySelector("main");

  main.replaceChildren(createContact());
}

export default loadContact;
