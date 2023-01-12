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
const nav_list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const sectionsList_number = sections.length;
const scrollTop = document.getElementById("scrollTop");
const button__container = document.getElementById("button__container");
const collapse = document.querySelectorAll(".collapse");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// make active class and highlight active section in navbar
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      //add active state from other section and corresponding Nav link
      section.classList.add("your-active-class");
      //add highlight to navigation
      document.querySelectorAll(".menu__link").forEach((link, index) => {
        if (`section${index + 1}` == section.id) {
          link.style.cssText =
            "background: #333;color: #fff;transition: ease 0.3s all";
        } else {
          link.style.cssText =
            "display: block;padding: 1em;font-weight: bold;text-decoration: none;";
        }
      });
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("your-active-class");
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//collapse and expand button
function collapse_section() {
  collapse.forEach((button, index) => {
    // check section to align button lef or right
    if (index % 2 == 0) {
      button.style.right = "2%";
    } else {
      button.style.left = "2%";
    }
    // event to collapse or expand the section
    button.addEventListener("click", (e) => {
      console.log(e.target.parentElement);
      const contents = e.target.nextElementSibling.children; //get children of each section
      // console.log(contents);
      for (const content of contents) {
        //loop through element of section
        if (content.tagName != "H2") {
          // check to collapse all except h2
          if (content.style.display === "none") {
            content.style.display = "block";
            button.innerText = "Collapse";
       
          } else {
            content.style.display = "none";
            e.target.parentElement.style.minHeight = "0vh";
            button.innerText = "Expand";
          }
        }
      }
    });
  });
}

// build scroll to top button
function scroll_button() {
  document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = `Scroll to Top`;
    scrollBtn.classList.add("scrollTop");
    scrollBtn.style.cursor = "pointer";
    button__container.appendChild(scrollBtn);
    scrollBtn.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  });
}

// build the nav
const build_nav = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 1; index <= sectionsList_number; index++) {
    const li_Element = document.createElement("li");
    li_Element.innerHTML = `<a        href = "#"
                                        class="menu__link"
                                        > Section ${index}
                                        </a>
                                    `;
    fragment.appendChild(li_Element);
  }
  nav_list.appendChild(fragment); //add all li at once
};

// Add class 'active' to section when near top of viewport
const set_Active_Section = () => {
  window.addEventListener("scroll", () => {
    makeActive();
  });
  //### another functions
  // document.body.onscroll = () => {
  //loop through all sections in the page
  // sections.forEach((section) => {
  //   const sectionLocation = section.getBoundingClientRect();
  //   // ## check section location on viewport
  //   console.log(
  //     `${section.id}  top:${sectionLocation.top} bottom:${sectionLocation.bottom} height: ${sectionLocation.height} window: ${window.innerHeight}  `
  //   );
  //   if (sectionLocation.top - sectionLocation.height <= -577) {
  //     //if section on screen viewport
  //     section.classList.add("your-active-class");
  //     // loop through menu link to highlight it
  //     document.querySelectorAll(".menu__link").forEach((link, index) => {
  //       if (`section${index + 1}` == section.id) {
  //         link.style.cssText =
  //           "background: #333;color: #fff;transition: ease 0.3s all";
  //       } else {
  //         link.style.cssText =
  //           "display: block;padding: 1em;font-weight: bold;text-decoration: none;";
  //       }
  //     });
  //   } else {
  //     section.classList.remove("your-active-class");
  //   }
  // });
  // };
};

// Scroll to anchor ID using scrollTO event
const scrollTo_section = () => {
  nav_list.childNodes.forEach((link, ind) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let scrollToSection = document.getElementById(`section${ind + 1}`);
      // console.log(document.getElementById(`section${ind}`));
      window.scrollBy({
        top: `${scrollToSection.getBoundingClientRect().top}`,
        behavior: "smooth",
      });
    });
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
build_nav();
// scroll Top Button
scroll_button();
// Scroll to section on link click
scrollTo_section();
// Set sections as active
set_Active_Section();
//collapse and expand button
collapse_section();
