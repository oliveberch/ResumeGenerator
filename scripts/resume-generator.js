document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generate-button");
  const downloadLink = document.getElementById("download-link");

  // Function to handle form submission
  const handleFormSubmission = () => {
    // Collect user data from the form
    const name = document.getElementById("name").value;
    const contactNumber = document.getElementById("contact-number").value;
    const contactAddress = document.getElementById("contact-address").value;
    const mailId = document.getElementById("mail-id").value;
    const academics = document.getElementById("academics").value;
    const experience = document.getElementById("experience").value;

    const userData = {
      name,
      contactNumber,
      contactAddress,
      mailId,
      academics,
      experience,
    };

    // Send user data to the server
    fetch("/generate-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Error generating the resume");
        }
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.style.display = "inline-block";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Add event listeners
  generateButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleFormSubmission();
  });
});
