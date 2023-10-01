import styleHome from "../src/css/styleHome.css";

function createHome() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const homeHeroDiv = document.createElement("div");
  homeHeroDiv.classList.add("home-hero-div");

  const homeHeader = document.createElement("h1");
  homeHeader.classList.add("home-header");
  homeHeader.innerText = "WELCOME TO HAMZA KEBAB";

  homeHeroDiv.appendChild(homeHeader);

  const homeHeroBtnsDiv = document.createElement("div");
  homeHeroBtnsDiv.classList.add("home-hero-butons-container");

  const homeHeroMenuBtn = document.createElement("button");
  homeHeroMenuBtn.innerText = "Our Menu";
  homeHeroMenuBtn.classList.add("home-hero-button");

  const homeHeroOrderBtn = document.createElement("button");
  homeHeroOrderBtn.innerText = "Order";
  homeHeroOrderBtn.classList.add("home-hero-button");

  const homeDescriptionContainer = document.createElement("div");
  homeDescriptionContainer.classList.add("home-description-container");

  const homeDescriptionHeader = document.createElement("h2");
  homeDescriptionHeader.classList.add("home-description-header");
  homeDescriptionHeader.innerText =
    "Indulge in the Irresistible World of Kebabs";

  const homeDescriptionText = document.createElement("p");
  homeDescriptionText.classList.add("home-description-text");
  homeDescriptionText.innerText = `At Hamza's Kebab, we invite you to embark on a culinary adventure like no other. Step into a world where succulent meats, vibrant spices, and centuries-old recipes come together to create a symphony of flavors. With a commitment to excellence that spans generations, we take pride in crafting the perfect kebab. Each dish is a labor of love, prepared with the finest ingredients and an unwavering dedication to authenticity.`;

  const visitUsHeader = document.createElement("h2");
  visitUsHeader.classList.add("home-description-header");
  visitUsHeader.innerText = "Visit Us Today";

  const visitUsText = document.createElement("p");
  visitUsText.classList.add("home-description-text");
  visitUsText.innerText = `Come join us at Hamza's Kebab and experience the magic of authentic Middle Eastern cuisine. Whether you're dining in with friends and family or ordering takeout for a cozy night in, we promise to transport your taste buds to the heart of the Middle East. Our restaurant is more than a place to eat; it's a celebration of culture, tradition, and the culinary legacy of Hamza Pehlivan. We can't wait to welcome you to our kingdom!`;

  const map = document.createElement("iframe");
  map.classList.add("map");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9480.144025860072!2d9.981466449839186!3d53.55712470251014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f18153098ab%3A0x79a334b868662a03!2sHamza%20Kebab!5e0!3m2!1spl!2spl!4v1696161306191!5m2!1spl!2spl";
  homeDescriptionContainer.appendChild(homeDescriptionHeader);
  homeDescriptionContainer.appendChild(homeDescriptionText);

  homeDescriptionContainer.appendChild(visitUsHeader);
  homeDescriptionContainer.appendChild(visitUsText);

  homeDescriptionContainer.appendChild(map);

  homeHeroBtnsDiv.appendChild(homeHeroMenuBtn);
  homeHeroBtnsDiv.appendChild(homeHeroOrderBtn);

  homeHeroDiv.appendChild(homeHeroBtnsDiv);

  mainContent.appendChild(homeHeroDiv);
  mainContent.appendChild(homeDescriptionContainer);

  return mainContent;
}

function loadHome() {
  const main = document.querySelector("main");

  main.replaceChildren(createHome());
}

export default loadHome;
