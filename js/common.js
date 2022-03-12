/** @format */

function iterateByClass(className, callback) {
  const elements = document.getElementsByClassName(className);

  for (var i = 0; i < elements.length; i++) {
    const elem = elements[i];
    callback(elem);
  }
}
