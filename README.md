SVG Logo Maker

Description
The SVG Logo Maker is a Node.js command-line application designed for freelance web developers to quickly generate simple logos without the need for a graphic designer. The application prompts the user for input to create an SVG logo based on their specified text, colors, and shapes. The generated logo is saved as an SVG file.

Table of Contents

1. Installation
2. Usage
3. Features
4. Examples
5. Tests
6. Contributing
7. License
8. Installation

To install and set up the project, follow these steps:

- Clone the repository: bash

- git clone git@github.com:marcmarino83/SVG-Logo-Maker.git

- Navigate to the project directory: bash

- cd svg-logo-maker

- Install the necessary dependencies: bash

-  npm install

- Usage: To run the application, use the following command:

   bash
   node index.js
   The application will prompt you to enter the following:

        - Text for the logo (up to three characters)
        - Text color (color keyword or hexadecimal number)
        - Shape (choose from circle, triangle, or square)
        - Shape color (color keyword or hexadecimal number)
        - After providing the input, an SVG file named logo.svg will be generated, and the output text "Generated logo.svg" will be printed in the command line. You can open the logo.svg file in a browser to view your logo.

Features

        - Text Input: Enter up to three characters for the logo text.
        - Text Color: Specify the text color using a color keyword or hexadecimal number.
        - Shape Selection: Choose from circle, triangle, or square.
        - Shape Color: Specify the shape color using a color keyword or hexadecimal number.
        - SVG Generation: Generates a 300x200 pixel SVG file based on the provided input.
        - Examples
        - Example directory structure: go 


            ├── examples/           // Example svg file(s) created with the app
            ├── lib/                // Folder for classes or functions
            │   ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
            │   ├── shapes.test.js  // Jest tests for shapes
            │   └── more...         // Additional files and tests
            ├── .gitignore          // Indicates which folders and files Git should ignore
            ├── index.js            // Runs the application using imports from lib/
            ├── package.json
            └── README.md           // App description, link to video, setup and usage instructions

Tests

The application uses Jest for running unit tests. To run the tests, use the following command:

 - bash
 - Copy code
 - npm test
- Tests are provided for the Triangle, Circle, and Square classes, ensuring that the render() method returns the correct SVG string for the given shape color.

Contributing

To contribute to this project:

 - Fork the repository.
 - Create a new branch (git checkout -b feature-branch).
 - Make your changes and commit them (git commit -m 'Add new feature').
 - Push to the branch (git push origin feature-branch).
 - Create a new Pull Request.