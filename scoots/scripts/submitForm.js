function submitForm() {
  var form = document.getElementById("rentalForm");
  if (form.checkValidity()) {
      // You can add logic here to handle the form data, e.g., send it to a server.
      alert("Form submitted successfully!");
  } else {
      alert("Please fill in all required fields.");
  }
}