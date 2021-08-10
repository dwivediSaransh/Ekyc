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
export { conVal, namVal };
