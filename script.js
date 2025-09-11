const card = document.querySelector(".trend");
const card2 = document.getElementById("trendSec");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
let mainPage = document.querySelector(".main");

// By default hide about & contact
about.style.display = "none";
contact.style.display = "none";

// Section Controller
function homes() {
  about.style.display = "none";
  contact.style.display = "none";

  document.getElementById("home").style.color = "rgb(2, 173, 173)";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("blog").style.color = "black";
}

function shops() {
  about.style.display = "none";
  contact.style.display = "none";

  document.getElementById("shop").style.color = "rgb(2, 173, 173)";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("blog").style.color = "black";
}

function blogsSection() {
  about.style.display = "none";
  contact.style.display = "none";

  document.getElementById("blog").style.color = "rgb(2, 173, 173)";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function abouts() {
  about.style.display = "block";
  contact.style.display = "none";

  document.getElementById("about").style.color = "rgb(2, 173, 173)";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("blog").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function contacts() {
  about.style.display = "none";
  contact.style.display = "block";

  document.getElementById("contact").style.color = "rgb(2, 173, 173)";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("blog").style.color = "black";
  document.getElementById("about").style.color = "black";
}

// Smooth scroll helper
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Product Popup
const productPopup = {
  show(img, title, shortDesc, fullDesc, link) {
    document.getElementById("detailImg").src = img;
    document.getElementById("detailTitle").innerText = title;
    document.getElementById("detailShortDesc").innerText = shortDesc;
    document.getElementById("detailFullDesc").innerText = fullDesc;
    document.getElementById("detailLink").href = link;
    document.getElementById("detailShortDesc").innerHTML = shortDesc;

    document.getElementById("productDetailBox").style.display = "block";
  },

  close() {
    document.getElementById("productDetailBox").style.display = "none";
  }
};

// Cart
const cartControl = {
  show(img) {
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
  },

  add() {
    alert("Added To Cart");
    location.reload();
  }
};

function showProduct(img, title, shortDesc, fullDesc, link) {
  productPopup.show(img, title, shortDesc, fullDesc, link);
}

function closeProduct() {
  productPopup.close();
}
