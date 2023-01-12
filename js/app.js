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
const menuLink = document.querySelectorAll(".menu__link");

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
    li_Element.innerHTML = `<a    href = "#"
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
  //### function 1
  document.body.onscroll = () => {
    //loop through all sections in the page
    sections.forEach((section) => {
      const sectionLocation = section.getBoundingClientRect();
      // ## check section location on viewport
      // console.log(
      //   `${el.id}  top:${sectionLocation.top} bottom:${sectionLocation.bottom} height: ${sectionLocation.height} window: ${window.innerHeight}  `
      // );
      if (sectionLocation.top - sectionLocation.height <= -577) {
        //if section on screen viewport
        section.classList.add("your-active-class");

        // loop through menu link to highlight it
        menuLink.forEach((link, index) => {
          console.log(section.id);
          if (`section${index + 1}` == section.id) {
            console.log(link);
            link.style.cssText =
              "background: #333;color: #fff;transition: ease 0.3s all";
          } else {
            link.style.cssText =
              "display: block;padding: 1em;font-weight: bold;text-decoration: none;";
          }
        });
      } else {
        section.classList.remove("your-active-class");
      }
    });
  };
  // ### function 2
  // document.body.onscroll = () => {
  //   sections.forEach((el) => {
  //     sectionLocation = el.getBoundingClientRect();
  //     if (sectionLocation.bottom < window.innerHeight) {
  //       el.classList.add("your-active-class");

  //       menuLink.forEach((element, index) => {
  //         console.log(el.id);
  //         if (`section${index + 1}` == el.id) {
  //           console.log(element);
  //           element.style.cssText =
  //             "background: #333;color: #fff;transition: ease 0.3s all";
  //         } else {
  //           element.style.cssText =
  //             "display: block;padding: 1em;font-weight: bold;text-decoration: none;";
  //         }
  //       });
  //     } else {
  //       el.classList.remove("your-active-class");
  //     }
  //   });
  // };
};

// Scroll to anchor ID using scrollTO event
const scrollTo_section = () => {
  nav_list.childNodes.forEach((link, ind) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let scrollToSection = document.getElementById(`section${ind + 1}`);
      console.log(document.getElementById(`section${ind}`));
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
// for (let index = 1; index <= sectionsList_number; index++) {
//   build_nav(index);
// }
// navList.appendChild(fragment);
build_nav();
// Scroll to section on link click
scrollTo_section();
// Set sections as active
set_Active_Section();
