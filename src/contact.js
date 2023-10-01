import styleContact from "./css/styleContact.css";

function createContact() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const contactHeader = document.createElement("h1");
  contactHeader.classList.add("contact-header");
  contactHeader.innerText = "Contact";

  const contactText = document.createElement("p");
  contactText.classList.add("contact-text");
  contactText.innerText = "Order by phone or visit us!";

  mainContent.append(contactHeader, contactText);

  return mainContent;
}

function loadContact() {
  const main = document.querySelector("main");

  main.replaceChildren(createContact());
}

export default loadContact;
