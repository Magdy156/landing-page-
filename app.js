// stored all sections in variable
const allSec = document.querySelectorAll("section");

// made a document fragment
const fragm = document.createDocumentFragment();

// here i stored unordered list element (ul) in variable
let mynav_list = document.getElementById("navbar__list");

// here i used forEach() method to get to each section
allSec.forEach(function (e) {
  // here created li element and stored it in variable
  let li_item = document.createElement("li");

  // here i made funcutin to listen to click event
  li_item.addEventListener("click", function () {
    //  here i used scrollIntoView() to scroll into the section that i need
    e.scrollIntoView({ behavior: "smooth" });
  });
  // created anchor element and stored it in variabel
  let a = document.createElement("a");

  // here i made variable to store each value of 'data-nav' attribute
  let data_nav = e.getAttribute("data-nav");

  // here i used createTextNode() method to return text node and stored it in variable
  let sec_text_node = document.createTextNode(data_nav);

  // here i set 'class' attribute for 'a' element to give some styles by css
  a.setAttribute("class", "menu__link");

  // apped the text node to the 'a' element
  a.appendChild(sec_text_node);

  // apped  'a' element to 'li' elment
  li_item.appendChild(a);

  // append li to the fragment
  fragm.appendChild(li_item);
});

// here i append the fragment to 'ul' element
mynav_list.appendChild(fragm);

//***************************************************************
//(Active class Addition)
// made function to listen to any scroll in the window
window.addEventListener("scroll", function () {
  // here i used forEach() method to get to each section
  allSec.forEach((sec) => {
    // here i used getBoundingClientRect() method to get information about the size of an element and its position relative to the viewport
    let myDimensions = sec.getBoundingClientRect();

    // here i used if condition and forEach() to give active class to the section that showed in the window and remove the active class from the rest
    if (myDimensions.top >= 0 && myDimensions.bottom <= window.innerHeight) {
      allSec.forEach(function (sec) {
        sec.classList.remove("your-active-class");
      });
      sec.classList.add("your-active-class");
    }
  });
});
// ***************************************************************
//(Active link Addition)
// made function to listen to any scroll in the window
window.addEventListener("scroll", function () {
  // here i used forEach() method to get to each section
  allSec.forEach((sec) => {
    // stord all anchor elements in varaible
    let secLinks = document.querySelectorAll("a");

    // here i made variable to store each value of 'data-nav' attribute
    let data_nav = sec.getAttribute("data-nav");
    // here used forEach() to get to each link(a element)
    secLinks.forEach((link) => {
      // here i used if condition and forEach() to give active link class to the link that points to the showed section in the window and remove the active link class from the rest

      if (
        link.textContent == data_nav &&
        sec.classList.contains("your-active-class")
      ) {
        secLinks.forEach((link) => {
          link.classList.remove("Active_link");
        });
        link.classList.add("Active_link");
      }
    });
  });
});
//***************************************************

// this code to make the dynamic toggle button

// first i stored the toggle button in variable
const toggleButton = document.getElementsByClassName("toggle-button")[0];

// then stored the links of the nav bar
const navBarLinks = document.getElementsByClassName("my-links")[0];

// then added a listener function to the button to add or remove an active class that display the toggle button
toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
