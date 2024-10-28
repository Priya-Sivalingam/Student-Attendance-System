# Student Attendence System

## Overview
Student Attendence Syste is a React-based application with a simple authentication system, including login, home, and logout functionalities. This project demonstrates fundamental concepts of session handling using local storage and navigation using React Router.

## Features
- **User Authentication**: Basic login system with client-side validation.
- **Session Management**: Stores session information in local storage for persistence.
- **Navigation**: Uses React Router for seamless navigation between pages.
- **Responsive UI**: Styled with a clean and simple user interface.

---

## Prerequisites

To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm), which comes bundled with Node.js

---

## Project Setup

### 1. Clone the Repository
To begin, clone the repository to your local machine:
```bash
git clone https://github.com/Priya-Sivalingam/Student-Attendance-System.git
cd Student-Attendance-System
```

### 2. Server Setup (Optional)
If your application has a separate server component (e.g., for handling API requests), follow these steps:

#### a. Navigate to the Server Directory
If your server code is in a separate directory (e.g., `server`), navigate to that directory:
```bash
cd server
```

#### b. Install Server Dependencies
Run the following command to install the necessary server dependencies:
```bash
npm install
```

#### c. Start the Server
You can start your server with:
```bash
node server.js
```
Make sure your server is running on a port (e.g., `5000`) that doesn't conflict with your client.

### 3. Client Setup
Navigate back to the client directory (if you were in the server directory):
```bash
cd ..
```

#### a. Install Client Dependencies
Install all required client-side dependencies:
```bash
npm install
```

#### b. Start the Client Development Server
Run the following command to start the client server:
```bash
npm start
```
This will launch the app on `http://localhost:3000`.

---

## Project Structure

```plaintext
MyApp/
│
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   └── ...
│
├── server/                  # Server code (if applicable)
│   ├── server.js            # Main server file
│   ├── .env                 # .env file
│   ├── package.json         # Project metadata and dependencies
├── src/                     # Source code for the app
│   ├── pages/               # React pages
│   │   ├── Login.js         # Login page component
│   │   ├── Home.js          # Home page component
    ├── components/          # React components
│   │   ├── apiServices.js   # apiServices component
│   │   ├── AuthContext.js   # AuthContext component
│   │   ├── header.js        # header component
│   ├── App.js               # Main App component
│   ├── apiService.js        # Mock API service for login
│   ├── index.js             # Application entry point
│   └── ...
│
├── .gitignore               # Git ignore file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

### Key Files and Directories
- **`src/components/`**: Contains the main components for different parts of the app (e.g., Login, Home, Header).
- **`src/apiService.js`**: Simulates an API service to validate user credentials.
- **`src/App.js`**: Main application file where routes are defined.
- **`server/`**: Contains server-related files if applicable, such as API routes and the main server file.

---

## Using the Application

### Login
1. Go to `http://localhost:3000` and enter login credentials.
2. On successful login, you will be redirected to the home page.

### Logout
- Click the **logout icon** in the header to end the session and return to the login page.

---

## Testing the Application

### Login Credentials for Testing
Use these credentials for testing the login feature:

- **Username**: `2020E122`
- **Password**: `password1234`

### Steps
1. **Login**: Enter the credentials on the login page. Successful login should navigate you to the home page.
2. **Logout**: Click the logout icon in the header to clear the session and return to the login page.

---

## Customization

### Changing the Icons
Icons in the header are provided by Font Awesome. To modify them, update the icon elements within the `Header.js` component.

### Styling
- Modify CSS directly within each component's `styles` object.
- The current design uses basic inline styles and can be easily extended or replaced with a CSS-in-JS library or external CSS files.

---

## Dependencies

The project uses the following main dependencies:
- **React Router**: For handling navigation between login and home pages.
- **Font Awesome**: For displaying icons in the header.

---

## Troubleshooting

### Common Issues
- **Port Conflicts**: If the app doesn’t start, check if another application is using port `3000`. To resolve, either stop the other application or change the port in the `package.json` script.

---

## Contact

For questions or support, please reach out to [Priyatharsini Sivalingam](mailto:priyasivalingam99@example.com).

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
