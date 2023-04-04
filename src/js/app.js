/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////VARIABLES////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////  DOM  //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

const body = document.getElementsByTagName("body")[0];
const box1 = document.querySelector(".project-1");
const box2 = document.querySelector(".project-2");
const box3 = document.querySelector(".project-3");
const closeBtn = document.querySelector(".close-btn");
const closeBtn2 = document.querySelector(".close-btn-2");
const closeBtn3 = document.querySelector(".close-btn-3");
const modOver1 = document.querySelector(".modal-overlay-1");
const modOver2 = document.querySelector(".modal-overlay-2");
const modOver3 = document.querySelector(".modal-overlay-3");

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////  EVENTOS  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
/////////////// OPEN OR CLOSE THE MODAL ACCORDING TO THE SELECTED PROJECT /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

box1.addEventListener("click", function () {
  open1();
});

box2.addEventListener("click", function () {
  open2();
});

box3.addEventListener("click", function () {
  open3();
});

closeBtn.addEventListener("click", function () {
  close1();
});

closeBtn2.addEventListener("click", function () {
  close2();
});

closeBtn3.addEventListener("click", function () {
  close3();
});

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////  FUNCTIONS  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
//////// FUNCTIONS THAT OPEN OR CLOSE THE ACCORDING PROJECT, AND DISABLE SCROLLING ////////
///////////////////////////////////////////////////////////////////////////////////////////

let open1 = () => {
  modOver1.classList.add("open-modal");
  modOver1.style.display = "grid";
  body.style.overflowY = "hidden";
};

let open2 = () => {
  modOver2.classList.add("open-modal");
  modOver2.style.display = "grid";
  body.style.overflowY = "hidden";
};

let open3 = () => {
  modOver3.classList.add("open-modal");
  modOver3.style.display = "grid";
  body.style.overflowY = "hidden";
};

let close1 = () => {
  modOver1.style.display = "none";
  modOver1.classList.remove("open-modal");
  body.style.overflowY = "visible";
};

let close2 = () => {
  modOver2.style.display = "none";
  modOver2.classList.remove("open-modal");
  body.style.overflowY = "visible";
};

let close3 = () => {
  modOver3.style.display = "none";
  modOver3.classList.remove("open-modal");
  body.style.overflowY = "visible";
};

//////////////////////////////////////////////////7

const text = document.getElementById("contact__text");

let changeOnSize = (size) => {
  if (size.matches) {
    text.innerHTML = `Wanna chat?<br />
    <br />
    You can find me here! &dArr;`;
  } else {
    text.innerHTML = `Wanna chat?<br />
    <br />
    You can find me here! &rArr;`;
  }
};

let size = window.matchMedia("(max-width: 692px)");
changeOnSize(size); // Call listener function at run time
size.addListener(changeOnSize); // Attach listener function on state changes

///////////////////////////////////////////////////////////////////////////

let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

let appearOnTamaño = (tamaño) => {
  if (tamaño.matches) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
};

let tamaño = window.matchMedia("(max-width: 768px)");
appearOnTamaño(tamaño); // Call listener function at run time
tamaño.addListener(appearOnTamaño); // Attach listener function on state changes

///////////////////////////////////////////////////////////////////////////

const scrollBtn = document.querySelector(".scroll-btn");

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
