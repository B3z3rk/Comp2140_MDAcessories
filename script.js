// Menu toggle----------------------------------------------
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

//  product gallery-------------------------------

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};

// Cart function-------------------------------------------------------
// var parent = document.querySelector(".modal-parent");
// var productbtn = document.getElementsByClassName("addp");
// var x = document.querySelector(".X");

// for (var i = 0; i < productbtn.length; i++) {
//   var button = productbtn[i];
//   button.addEventListener("click", appear);
// }

// function appear() {
//   console.log("click");
//   parent.style.display = "block";
// }

// x.addEventListener("click", disappearX);
// function disappearX() {
//   parent.style.display = "none";
// }

// parent.addEventListener("click", disappearParent);
// function disappearParent(e) {
//   if (e.target.className == "modal-parent") {
//     parent.style.display = "none";
//   }
// }
// var addtocart = document.getElementById("cart2");

// addtocart.addEventListener("click", add);

// function add() {}

// contact form ..........................................

// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data ...........................................
function validateForm() {
   
  clearMessages();

  let errorFlag = false;

  if (nameInput.ariaValueMax.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Enter message";
    subject.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Success! We will contact you shortly";
  }
}

// Clear error / success message..............................

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  subject.classList.remove("error-border");
}

// check if email is valid................................

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
