import $ from "jquery";
function conVal() {
  $("#fieldSelectorNo").keypress(function (e) {
    var length = $(this).val().length;
    if (length > 9) {
      return false;
    } else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    } else if (length == 0 && e.which == 48) {
      return false;
    }
  });
}
function namVal() {
  $("#fieldSelectorname").keypress(function (e) {
    var length = $(this).val().length;
    if (length > 25) {
      return false;
    }
  });
}
//geolocation function
function getLocation() {
  // get the current position
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
// handle success case
function onSuccess(position) {
  const { latitude, longitude } = position.coords;

  console.log("success");
  console.log`Your location: (${latitude},${longitude})`;
}

// handle error case
function onError() {
  console.log("error");
  console.log`Failed to get your location!`;
}

export { conVal, namVal, getLocation };
