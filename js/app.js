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
const fragment = document.createDocumentFragment();
const navList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");
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
const build_nav = (index) => {
  const li_Element = document.createElement("li");
  li_Element.innerHTML = `<a href="#"
                                  data-nav ="section${index}"
                                  class = "menu__link"
                                  > Section ${index}
                                  </a>
                              `;
  fragment.appendChild(li_Element);
};

// Add class 'active' to section when near top of viewport

const section_to_active = (section) => {
  console.log(section.id);
  console.log(section.getBoundingClientRect());
  if (
    section.getBoundingClientRect().y >= 0.5 &&
    section.getBoundingClientRect().y <= 577
  ) {
    section.classList.add("your-active-class");
  } else {
    section.classList.remove("your-active-class");
  }
};

// Scroll to anchor ID using scrollTO event
const scrollTo_section = (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
for (let index = 1; index <= sections.length; index++) {
  build_nav(index);
}
navList.appendChild(fragment);

// Scroll to section on link click
navList.addEventListener("click", scrollTo_section);

// Set sections as active
window.onscroll = () => {
  document.querySelectorAll("section").forEach(section_to_active);
};
