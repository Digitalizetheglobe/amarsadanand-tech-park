function sendmail() {
    // Collect form data
    let parms = {
        firstname: document.getElementById("forminator-field-name-1_66bd2f5ee390a").value, // Assuming full name is used for firstname
        email: document.getElementById("forminator-field-email-1_66bd2f5ee390a").value,
        phone: document.getElementById("forminator-field-phone-1_66bd2f5ee390a").value,
        // Include message field if needed
    };

    // Define correct serviceID and templateID
    const serviceID = "service_zw3b259"; // Use your actual Service ID
    const templateID = "template_ulw3qjm"; // Use your actual Template ID

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, parms)
        .then(res => {
            // Clear form fields after successful submission
            document.getElementById("forminator-field-name-1_66bd2f5ee390a").value = "";
            document.getElementById("forminator-field-email-1_66bd2f5ee390a").value = "";
            document.getElementById("forminator-field-phone-1_66bd2f5ee390a").value = "";

            // Log success and alert user
            console.log(res);
            alert("Your message has been sent successfully!");
        })
        .catch(err => {
            // Handle errors
            console.error("EmailJS Error: ", err);
            alert("Failed to send email. Please try again later.");
        });
}

// Attach the sendmail function to the form submission event
document.getElementById('forminator-module-4207').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    sendmail();
});
