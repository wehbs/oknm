var originalNavClasses;
var originalBodyClasses;
function showHideNav() {
  var elem = document.getElementById("nav-header"),
    classes = elem.className,
    newClasses,
    bodyElem = document.getElementsByTagName("body")[0],
    bodyClasses = bodyElem.className,
    newBodyClasses;

  if (originalNavClasses === undefined) {
    originalNavClasses = classes;
  }
  elem.className = /expanded/.test(classes)
    ? originalNavClasses
    : originalNavClasses + " expanded";

  if (originalBodyClasses === undefined) {
    originalBodyClasses = bodyClasses;
  }
  bodyElem.className = /expanded/.test(bodyClasses)
    ? originalBodyClasses
    : originalBodyClasses + " expanded";
}
