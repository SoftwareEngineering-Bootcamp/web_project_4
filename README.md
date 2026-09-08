# Project Around The U.S.
### Project 4, 5, 6, 7, 8 & 9 from Praticum by Yandex Web Dev course
My first project using JavaScript and Webpack. This is a project split in small parts through the course to cover different aspects of web development.

<!-- * [My project is accessible here](https://abra-sena.github.io/web_project_4/) -->

## Description
* *Adaptive design* with *Mobile first approach*.
* Page structured with *BEM* methodology.
* Technologies: **_HTML_**, **_CSS_** and **_JavaScript_**.
* **Position:** _flexbox_, _grid container_, _media queries_.
* Smooth transition for popup opening and closing.
* Change of style on button like click.
* Form validation and event handling.
* Project bundling and building with **_Webpack_**.
* Connect project to server by making **_fetch requests_** to the server.

## Functionality

### Installation of Github pages to deploy project and make it accessible to users
#### (Update 2026: GitHub page not live)

Project is connected to the Yandex server through request using private token and group id. User profile informations and avatar are loaded from the server on page load. Requests are made to the server to collect all informations about a specific user: name, description, cards they added and the number of likes of each cards. The delete button is shown only on cards created by actual user and a confirmation is requested to make sure the user approve a card's deletion. User is allowed to change the profile picture my providing an url in the avatar edit modal. The following requests were allowed through the project: **_DELETE_**, **_GET_**, **_PATCH_**, **_POST_** and **_PUT_**.

### Project 9: Connect project to server
* Make a request to the server
* Load user informations from server
* Load card from server to the page
* Add card to the server and render them on the page
* Use API to delete card from the gallery, handle event listeners and count of each card's likes
* Allow user to update profile avatar

### Project 8: Refactoring, Project bundling and building with Webpack
We focused on more refactoring of the page. More classes were added, each handling a unique task, but all the classes are coupled together. Then the project bundling and building was set up using Webpack.
* Created the Section class for rendering a list of elements on a page
* Created the Popup class to open and close the popup window
* Created the PopupWithImage and PopupWithForm classes as child class of Popup
* Created the UserInfo class for rendering information about the user on the page
* Transformed the Card class by connecting it to the Popup
* Used `npm` to install Webpack and its command line interface
* Installed live server as a dependency inside project and integrated with Webpack
* Install Babel, JS transpiller for the build process with Webpack
* Install modules for CSS (Webpack plugin)
* CSS Minification and Autoprefixing
* Set up image and font processing
* Set up HTML processing so that everything works fine even with HTML code linking to local images

### Project 7: Organize project, Refactoring
Code is refactored and split into different parts, Card and FormValidator classes were created. A local server was installed to allow the use of JavaScript modules.
* Break code into modules
* Create classes for card and form validator

### Project 6: Form Validation
Validation is enabled on all forms and popups UX was improved. Allow user to close a popup with the _Escape_ key, or by clicking on the overlay or anywhere outside the popup's borders.
* Create a separate script file, **_validate.js_**, to handle _form validation_ of profile-edit and add-card forms
* Add event listeners to window to allow using **_Esc Key_** to close any popup window
* Add event listeners to window to allow closing any popup window with a click on the overlay

### Project 5
Using _JavaScript_ to add the initials six cards from an array on page load. Added a form to allow user to add new cards to the gallery and handle event listeners for liking cards. A card's state changes on click on the like button, and a delete button was added on each card. A picture popup open on card's click with a smooth transition between popup opening and closing.
* Six initials cards preloaded by default on page load with **_JavaScript_**
* Allow user to add a new and customizable card to gallery by clicking on add-card button
* Image name and link are required to successfully add a new card to the gallery
* A card can be added by pressing **_Enter_** while a text field is active and all required elements are provided
* A click on like button fill change the heart icon from solid white to solid black
* Delete a card from the gallery by click on trash icon
* Open a photo on full-screen with a click on it
* Smooth transition while opening or closing a popup

### Project 4
* Responsive design of the website
* Add six photo cards exported from Figma to the gallery
* Create fixed and centered popup forms and hide them by default
* Use JavaScript to change popup display and allow user to access popup forms
* Code Edit-profile popup to allow user to update profile' information
* Prevented too long text entrance using CSS to cut off the text that doesn't fit and replace it with ellipsis
* Practice on git branches by implementing new feature in a branch before merging them into master

## Submission Notes

* Project looks as brief on Figma instructed
* Popup form fixed when mouse over event on Edit button with overlay effect on the entire page
* Transition and animation effect on Edit Form conform to UI Kit
* Hover effect on all clickable elements
* Fix position of cards using justify and align properties on grid layout to get element centered
* Fix transition on form opening and closing by applying animation on visibility and opacity
* Fix event listener on delete and like buttons for cards added by user with add function

### Overview

**Figma**

* [Link to project 9 in Figma](https://www.figma.com/design/xQVeb8gprjukPVKXiLXS5T/Sprint-9--Applied-JavaScript?m=auto&t=Q0eRbwQolJ7Abt2m-6)
* [Link to project 4 in Figma](https://www.figma.com/design/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4--Around-The-U.S.---desktop---mobile?m=auto&t=lfZ7CaIgtRSBFlgM-6)

**Images**

* *Project 5:* Initial Cards provided by platform in a ready-made array
* *Project 4:* Exported directly from Figma and optimized [here](https://tinypng.com/)
