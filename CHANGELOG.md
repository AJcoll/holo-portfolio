# Project Changelog

This document tracks all changes, enhancements, and bug fixes for the Interactive Holographic HUD Portfolio project.

---

### **Branch: `feature/ui-enhancements`**

**Date:** July 12, 2025

**Changes:**

* **FEATURE:** Refactored the Skills module to display skills in lists instead of a single line of text for improved readability and structure.
* **FEATURE:** Applied a consistent boxed layout to the Profile and Skills modules to match the style of the Project categories.
* **FIX:** Corrected a bug where the "Back to Categories" button was visible on the initial view of the Projects module.
* **FEATURE:** Implemented project categorization within the Projects module. Users can now select a category (UX, Dev, IT/Cyber) to view a filtered list of projects.
* **REFACTOR:** Updated the HTML, CSS, and JavaScript to support the new "drill-down" navigation system in the Projects module, including a "back" button.
* **FEATURE:** Added a large, pulsing monogram logo to the center of the screen to fill empty space in the idle state. The logo fades out when a module is focused.
* **FEATURE:** Added short description text to each module in its minimized state to provide content previews.
* **REFACTOR:** Adjusted module heights in the idle state to accommodate the new preview text.
* **FIX:** Modified the `.module.focused` CSS rule to ensure modules expand to fill the screen when clicked. The `width` and `height` properties were being overridden by more specific ID selectors. Added `!important` to enforce the focused state dimensions.

---

### **Version 1.0.3**

**Date:** July 12, 2025

**Changes:**

* **DOCS:** Created a comprehensive `README.md` file for the GitHub repository, outlining project features and the tech stack.

---

### **Version 1.0.2**

**Date:** July 12, 2025

**Changes:**

* **FIX:** Corrected a CSS specificity issue where modules positioned with `top` and `left` (e.g., `#profile-module`) would not animate to the center.
* **REFACTOR:** Modified the `.module.focused` CSS rule to use `!important` on positioning properties (`top`, `left`, `right`, `bottom`) to ensure it overrides the initial position styles from ID selectors. This provides a more robust centering mechanism for all modules.

---

### **Version 1.0.1**

**Date:** July 12, 2025

**Changes:**

* **FIX:** Addressed a bug where focused modules were not centering correctly on the screen.
* **REFACTOR:** Updated the `.module.focused` CSS rule to include `transform: translate(-50%, -50%)` to ensure true centering of the element, both on desktop and within the mobile media query.

---

### **Version 1.0.0**

**Date:** July 12, 2025

**Changes:**

* **INIT:** Initial project setup.
* **FEATURE:** Created separate `index.html`, `style.css`, and `script.js` files.
* **FEATURE:** Implemented the core HUD interface with boot sequence, particle background, and interactive modules.
