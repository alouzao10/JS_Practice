// Use of the jQuery wrapper methods for AJAX
function loadText() {
  $('#demo').load(
    'https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt',
    function (responseTxt, statusTxt, xhr) {
      dataLoaded(responseTxt, statusTxt, xhr);
    }
  );
}

function dataLoaded(response, status, xhr) {
  if (status === 'success') {
    console.log('Load Success');
  } else if (status === 'error') {
    alert(`Load FAILED: ${status} `);
  }
}

function getText() {
  $.get(
    'https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt',
    function (data, status) {
      dataGet(data, status);
    }
  );
}

function dataGet(data, status) {
  if (status === 'success') {
    console.log('Get Success');
  } else if (status === 'error') {
    alert(`Get FAILED: ${status} `);
  }
}

function postText() {
  $.post(
    'https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt',
    { name: 'Danny', dataID: 5546 },
    function (data, status) {
      dataPosted(data, status);
    }
  );
}

// ================================================================

// Use of the AJAX method through jQuery
function ajaxCall() {
  $.ajax({
    url:
      'https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    timeout: 4000,
    success: function (retData) {
      console.log(retData);
      $('#demo2').html('<strong>' + retData + '</strong>');
    },
    error: function (error) {
      console.log('GET ERROR: ' + error);
    },
  });
}
