// Create an event listener to trigger the request
function loadText() {
  console.log('AJAX Request - START');

  // Create the XHR Object
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  // OPEN Function = type, url/file name, async
  xhr.open(
    'GET',
    'https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt',
    true
  );

  xhr.onload = function () {
    // Check the status of the response
    if (xhr.status === 200) {
      // Good
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      // Not Found
    }
  };

  // Execute the request
  xhr.send();
}
