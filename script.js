const dropdown = () => {
  let list = document.querySelector("ul");
  let navbar = document.querySelector("nav");
  let menu = document.getElementById("menu");
  let close = document.getElementById("close");

  list.style.display = "block";
  navbar.style.display = "block";
  navbar.style.height = "12rem";
  close.style.display = "block";
  menu.style.display = "none";
};

const closedropdown = () => {
  let list = document.querySelector("ul");
  let navbar = document.querySelector("nav");
  let menu = document.getElementById("menu");
  let close = document.getElementById("close");

  list.style.display = "none";
  navbar.style.display = "flex";
  navbar.style.height = "3rem";
  close.style.display = "none";
  menu.style.display = "block";
};

const project = () => {
  let pro = document.getElementById("projects");
  let cert = document.getElementById("certificates");
  let testac = document.getElementById("techstack");

  pro.style.display = "flex";
  cert.style.display = "none";
  testac.style.display = "none";
};

const certificate = () => {
  let pro = document.getElementById("projects");
  let cert = document.getElementById("certificates");
  let testac = document.getElementById("techstack");

  pro.style.display = "none";
  cert.style.display = "flex";
  testac.style.display = "none";
};

const techstack = () => {
  let pro = document.getElementById("projects");
  let cert = document.getElementById("certificates");
  let testac = document.getElementById("techstack");

  pro.style.display = "none";
  cert.style.display = "none";
  testac.style.display = "flex";
};

// const sub = () => {
//   let input = document.getElementById("input").value.trim();
//   let inputs = document.getElementById("input1").value.trim();
//   if (input.value === "") {
//     alert("please fill the form correctly");
//   } else if (inputs.value === "") {
//     alert("please fill the form correctly");
//     inputs.style.borderColor = "red";
//   } else if (!/^[a-z0-9@]+$/.test(inputs)) {
//     alert("please fill your Email correctly");
//   } else if (/^[a-z0-9@]+$/.test(inputs)) {
//     alert("your request is sent succesfully");
//     inputs.style.borderColor = "green";
//   } else {
//     alert("your request is sent succesfully");
//   }
// };

const sub = () => {
  let inputElem = document.getElementById("input");
  let emailElem = document.getElementById("input1");
  let message1 = document.querySelector("code");
  let message = document.querySelector("samp");
  let input = inputElem.value.trim();
  let email = emailElem.value.trim();

  if (input === "") {
    inputElem.style.borderColor = "red";
    message1.innerText = "invalid input!";
  } else if (email === "" || email.length === 0) {
    emailElem.style.borderColor = "red";
    message.innerText = "invalid email input!";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailElem.style.borderColor = "red";
    message.innerText = "invalid email format!";
  } else {
    alert("your request is sent successfully");
    emailElem.style.borderColor = "green";
    inputElem.style.borderColor = "green";
    emailElem.style.borderColor = "green";
    inputElem.style.borderColor = "green";
  }
  return;
};
