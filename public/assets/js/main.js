// Check if Dark Theme extensions are active
const backgroundColor = window
  .getComputedStyle(document.body)
  .getPropertyValue("background-color");
const textColor = window
  .getComputedStyle(document.body)
  .getPropertyValue("color");
const isDarkModeExtension =
  document.body.classList.contains("darkreader") ||
  document.body.classList.contains("dark-mode") ||
  document.body.classList.contains("dark") ||
  document.body.classList.contains("night-mode") ||
  document.body.classList.contains("nightmode") ||
  document.body.classList.contains("midnight") ||
  document.body.classList.contains("dark-mode-extension") ||
  document.body.classList.contains("night-mode-extension");

window.onload = function () {
  const elements = document.querySelectorAll('[class*=team_member_border]');
  if ((isDarkModeExtension ||
    backgroundColor === 'rgb(17, 17, 17)' ||
    backgroundColor === '#111111' ||
    backgroundColor === '#1a1a1a' ||
    backgroundColor === '#121212' ||
    backgroundColor === '#222222') &&
    (textColor === 'rgb(221, 221, 221)' || textColor === '#dddddd')
  ) {
    // Loop through each element and remove the border
    elements.forEach((element) => {
      const classNames = element.className.split(' ');

      classNames.forEach((className) => {
        if (className.indexOf('team_member_border') !== -1) {
          element.classList.remove(className);
        }
      });
    });
  }
}


