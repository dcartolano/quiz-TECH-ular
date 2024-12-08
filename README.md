# quiz-TECH-ular

## Description

The purpose of the app is to practice designing and running tests to automatically assess whether your program is running the way you intended or not. This project took an already functioning app, and based on its operation determined what elements were necessary to proper operation, and how to semantically define that criteria and test it.

Through this project, I was able to practice component and end-to-end testing using Cypress. I learned a lot more detail about the syntax Cypress uses, as well as the different methodology and mindset required to successfully complete each type of testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Copy the SSH Key from the [GitHub Repository](https://github.com/dcartolano/quiz-TECH-ular) and perform a git clone into a local directory of your choice. Open in VS Code or similar program. In the integrated terminal, run `npm i` to download all relevant node modules. Afterwards, run the commands `npm run seed` followed by `npm run build`.

## Usage

To run the app locally and view in a browser, run the command `npm run start:dev`. 

To run the tests, you must already have the server running by using the command above. Without closing out your terminal where the server is running, open a new terminal tab/window and run the command `npm run test`, which will cause both the component and end-to-end tests to run. The terminal output will tell you the results of these tests, and whether program operation passes or not.

## Credits

Thanks to EdX and Northwestern for the starter code and the opportunity to practice these skills. 

Thanks also to my instructor and the EdX tutors for all the help and clarifications along the way.

## License

n/a