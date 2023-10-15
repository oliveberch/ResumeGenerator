# Resume Generator

A simple Resume Generator project that allows users to easily create a resume in LaTeX format by providing their personal details and experience. The generated resume can be downloaded as a PDF file.

## Features

- Collects user details including name, contact information, academic background, and work experience.
- Utilizes the OpenAI API to generate a LaTeX-based resume with industry-standard formatting.
- Converts the LaTeX code into a downloadable PDF file.
- Responsive and user-friendly web interface.

## Development Approach

This project is built using JavaScript, Node.js, and Express for the server, HTML for the front-end interface, and CSS for styling. Here's a high-level overview of the development approach:

1. **User Input:** Users provide their details in a web form, including name, contact information, academics, and work experience.

2. **Server-Side Processing:** The server collects the user input and sends it to the OpenAI API to generate LaTeX code for a professional resume.

3. **LaTeX to PDF Conversion:** The LaTeX code is converted into a PDF document using the 'latex' package.

4. **User Download:** The generated resume PDF is made available to the user as a downloadable file.

## Usage

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/resume-generator.git
   ```

2. Set up the project by installing the required dependencies.

   ```bash
   cd resume-generator
   npm install
   ```

3. Create an `.env` file in the project root and add your OpenAI API key.

   ```env
   OPENAI_API_KEY=your-api-key
   ```

4. Start the server.

   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access the Resume Generator.

## Dependencies

- Node.js
- Express
- Axios
- LaTeX (for converting LaTeX to PDF)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to OpenAI for their text generation capabilities, which make this project possible.
- Inspired by the need for a simple and efficient way to generate resumes.

### PS

Feel free to customize prompt as per your needs.
