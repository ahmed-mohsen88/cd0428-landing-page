/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const sectionsList_number = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const build_nav = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index <= sectionsList_number; index++) {
    const li_Element = document.createElement("li");
    li_Element.innerHTML = `<a href="#"
                                    data-nav ="section${index}"
                                    class = "menu__link"
                                    > Section ${index}
                                    </a>
                                `;
    fragment.appendChild(li_Element);
  }
  navList.appendChild(fragment); //add all li at once
};

// Add class 'active' to section when near top of viewport
const set_Active_Section = () => {
  window.onscroll = () => {
    sections.forEach(function (section) {
      if (
        section.getBoundingClientRect().y >= 0.5 &&
        section.getBoundingClientRect().y <= 577 //get from console.log(section.getBoundingClientRect())
      ) {
        section.classList.add("your-active-class");
      } else {
        section.classList.remove("your-active-class");
      }
    });
  };
};

// Scroll to anchor ID using scrollTO event
const scrollTo_section = () => {
  navList.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.dataset.nav) {
      //select only section was clicked or targeted
      document
        .getElementById(`${event.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// for (let index = 1; index <= sectionsList_number; index++) {
//   build_nav(index);
// }
// navList.appendChild(fragment);
build_nav();
// Scroll to section on link click
scrollTo_section();
// Set sections as active
set_Active_Section();
