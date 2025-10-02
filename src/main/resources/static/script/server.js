document.getElementById("studentFeedback").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobileNumber = Number(document.getElementById("mobileNumber").value) || null;
  const subject = document.getElementById("subject").value || null;
  const message = document.getElementById("message").value || null;
  const rating = Number(document.querySelector('input[name="rating"]:checked')?.value);
  
  if (!rating) {
    alert("Please select a rating before submitting!");
    return; 
  }

  // Perform your custom tasks here
  console.log("Form submitted with:", { name, email, mobileNumber, subject, message, rating });
  alert("Thank you for your feedback, " + name + "!");

  document.getElementById("studentFeedback").reset();

  fetch("/student", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, mobileNumber, subject, message, rating })
  })
    .then(res => res.json())
    .catch(err => console.error("Error:", err));
});
