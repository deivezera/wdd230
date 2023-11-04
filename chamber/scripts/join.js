document.addEventListener("DOMContentLoaded", function () {
  var timestampField = document.getElementById("timestamp");
  if (timestampField) {
    var currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
  }
});