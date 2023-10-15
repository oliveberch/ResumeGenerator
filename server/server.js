const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const latex = require("latex");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENAI_API_KEY; // Load API key from .env file

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/generate-resume", async (req, res) => {
  try {
    const user = req.body;
    
    // Construct a prompt for OpenAI based on user data
    const prompt = `Create a resume for ${user.name} using industry relevant keywords in LaTex code.
                    Name: ${user.name}
                    Phone Number: ${user.contactNumber}
                    Contact Address: ${user.contactAddress}
                    Mail ID: ${user.mailId}
                    Academic Qualifications: ${user.academics}
                    Work Experiences: ${user.experience}`;

    // Send a request to OpenAI API to generate the LaTeX code
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt,
        max_tokens: 200,
      },
      {
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    const latexCode = response.data.choices[0].text;

    // Convert LaTeX to PDF
    const pdfStream = latex.createStream();
    pdfStream.pipe(fs.createWriteStream("resume.pdf"));
    pdfStream.end(latexCode);

    res.download("resume.pdf");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error generating the resume");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
