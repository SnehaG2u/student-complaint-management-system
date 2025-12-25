document.getElementById("complaintForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("message").innerText = "Thank you, complaint submitted!";
  this.reset();
});
