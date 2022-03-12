/** @format */

function iterateByClass(className, callback) {
  const elements = document.getElementsByClassName(className);

  for (var i = 0; i < elements.length; i++) {
    const elem = elements[i];
    callback(elem);
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
