# Password Generator

## Description
This application empowers employees to create secure passwords based on user-selected criteria. It's designed to run directly in the browser and features a dynamic interface that updates in real-time, adapting to multiple screen sizes.

## Features
- **Dynamic User Interface**: Real-time updates as selections are made.
- **Customizable Criteria**: Users can choose password length, and whether to include lowercase, uppercase, numeric, and special characters.
- **Responsive Design**: Functional and aesthetically pleasing across various devices.

## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria 

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Mock-Up
The application displays a simplistic and easy-to-navigate interface where the user can generate a password by following prompt-based selections.

![Password Generator Screenshot](<assets/images/passwordgenerator.jpg>)

## Installation
To use the application, simply open the `index.html` file in any modern web browser.

## Usage
1. Click the "Generate Password" button.
2. Follow the on-screen prompts to select the desired password criteria.
3. View the generated password either in an alert or directly on the page.

## Contributing
Contributions are always welcome! Please fork the repository and open a pull request with your changes, or create an issue to suggest improvements.

## License
This project is licensed under the MIT License - see the `LICENSE`