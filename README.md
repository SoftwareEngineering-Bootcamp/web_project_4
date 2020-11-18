# Project Around The U.S.
# Project 4, 5, 6, 7, 8 & 9 from Praticum by Yandex Web Dev course

* [My project is accessible here](https://abra-sena.github.io/web_project_4/)

## My first project using JavaScript and Webpack. This is a project breakdown in small pieces through the course to cover different aspects of web development.

### Description
* *Adaptive design* with *Mobile first approach*.
* Page structured with *BEM* methodology.
* Technologies: **_HTML_**, **_CSS_** and **_JavaScript_**.
* **Position:** _flexbox_, _grid container_, _media queries_.
* Smooth transition for popup opening and closing.
* Change of style on button like click.
* Form validation and event handling.
*  Project bundling and building with **_Webpack_**.
* Connect project to server by making **_fetch requests_** to the server.

### Functionality

## Installation of Github pages to deploy project and make it accessible to users.

## Project is connected to the Yandex server through request using private token and group id. User profile informations and avatar are loaded from the server on page load. Requests are made to the server to collect all informations about a specific user: name, description, cards they added and the number of likes of each cards. The delete button is shown only on cards created by actual user and a confirmation is requested to make sure the user approve a card's deletion. User is allowed to change the profile picture my providing an url in the avatar edit modal. The following request where made through the project: DELETE, GET, PATCH, POST and PUT.

**Project 9: Connect project to server**
* Make a request to the server.
* Laod user informations from server.
* Load card from server to the page.
* Add card to the server and render them on the page.
* Use API to delete card from the gallery, handle event listeners and count of each card's likes.
* Allow user to update profile avatar.


## In project 8, I continue refactoring the page. More classes were created, each one is handling a unique task. All the classes are coupled together. At the end, the project bundling and building is set up with webpack.

**Project 8: Refactoring, Project bundling and building with Webpack**
* Created the Section class for rendering a list of elements on a page.
* Created the Popup class to open and close the popup window.
* Created the PopupWithImage and PopupWithForm classes as child class of Popup.
* Created the UserInfo class for rendering information about the user on the page.
* Transformed the Card class by connecting it to the Popup.
* Used npm to install webpack and its commandline interface.
* Installed live server as a dependency inside project and integrated with Webpack.
* Install Babel, JS transpiller which webpack will use in the build process.
* Install modules for CSS (Webpack plugin).
* CSS Minification and Autoprefixing.
* Set up image and font processing.
* Set up HTML processing so that everything works fine even with HTML code linking to local images.


## Code is refactored and break into pieces, Card and FormValidator classes where created. Installation of a local server to use JavaScript modules in local.

**Project 7: Organize project, Refactoring**
* Break code into modules
* Create classes for card and form validator.


## Validation is enabled on all forms and popups UX was improved. Allow user to close a popup with the Escape key, or by clicking on the overlay or anywhere outside the popup's borders.

**Project 6: Form Validation**
* Create a separate script file, *validate.js*, to handle _form validation_ of profile-edit and add-card forms.
* Add event listeners to window to allow user to use *Esc Key* to close any popup window.
* Add event listeners to window to allow user to close any popup window by clicking on the overlay.


## Using _JavaScript_ to add the initials six cards from an array on page load. Add a form to allow user to add new cards to the gallery and handle card's like. Code the like to change state on click, and add a delete button on each card. Code functionnality to open a picture popup on card's click, and applied a smooth transition between popup opening and closing.

**Project 5**
* Six initials cards preloaded by default on page load with **_JavaScript_**.
* Allow user to add a new and customizable card to gallery by clicking on add-card button.
* Image name and link are required to successfully add a new card to the gallery.
* A card can be added by pressing Enter while a text field is active and all required element are provided.
* A click on like button fill change the heart icon from solid white to solid black.
* Delete a card from the gallery by click on trash icon.
* Open a photo on full-screen by a click on it.
* Smooth transition while opening or closing a popup.


**Project 4**
* Responsive design of the website.
* Add six photo cards exported from figma to the gallery.
* Create fixed and centered popup forms and hide them by default.
* Use JavaScript to change popup display and allow user to acess popup forms.
* Code Edit-profile popup to allow user to update profile' information.
* Prevented too long text entrance using CSS to cut off the text that doesn't fit and replace it with ellipsis.
* Practice on git branches by implementing new feature in a branch before merging them into master.

### Submission Notes

* Project looks like brief on Figma.
* Popup form fixed when mouse over edit button with overlay effect on hole page.
* Transition and animation effect on Edit Form conform to UI Kit.
* Hover effect on all clickable elements.
* Fix position of cards using justify and align properties on grid layout to get element centered.
* Fix transition on form opening and closing by appling animation on visibility and opacity.
* Fix event listener on delete and like button for cards added by user with add function.

### Overview

* Figma
* Images

**Figma**

* [Link to project 6 in Figma](https://www.figma.com/file/KUbYgXnYElfzxCbcrlsOCE/Sprint-6%3A-Around-The-U.S.?node-id=0%3A1)
* [Link to project 5 in Figma](https://www.figma.com/file/avLHzpJw2dmU2NaDATZ6CX/Sprint-5%3A-Around-The-U.S.-%2F-desktop-%2B-mobile?node-id=0%3A1)
* [Link to project 4 in Figma](https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)

**Images**

* *Project 5:* Initial Cards provided by platform in a ready-made array
* *Project 4:* Exported directly from Figma and optimized [here](https://tinypng.com/).
