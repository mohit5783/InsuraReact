# Zurich-Frontend

This repository contains the frontend solution for the Zurich application, which is built using React and Redux. The application provides a frontend portal for managing user data and implements authentication using Google OAuth. This assignement is developed using React JS. The portal utilizes Google OAuth2 for user authentication. The following sections provide details about the technology stack, hosting environment, design patterns, and code for the frontend portal.

## Technology Stack

The frontend solution is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing the application's state.
- **React Router**: A library for handling routing within the application.
- **React OAuth Google**: A library for implementing Google OAuth authentication in the application.
- **CSS**: Cascading Style Sheets for styling the user interface.
- **Ant Design**: A UI component library that provides pre-designed and customizable components.
- **Axios**: A promise-based HTTP client for making API requests.

## Hosting Environment

The frontend solution can be hosted in various environments. Here are three popular options:

1. **AWS Amplify**: AWS Amplify is a comprehensive development platform provided by Amazon Web Services (AWS). It offers seamless integration with other AWS services for serverless backend functionality and static file hosting.

2. **Netlify**: Netlify is a popular hosting platform specializing in static site hosting. It provides features like continuous deployment, automatic SSL certificate provisioning, and a global content delivery network (CDN).

3. **Vercel**: Vercel is a cloud platform designed for static and serverless deployments. It offers automatic deployments, instant scaling, a built-in CDN, and serverless functions.

## Hosting Solution for AWS

To host a React application on AWS, you can follow these steps:
- Set up an Amazon S3 bucket to store your static files.
- Configure the bucket to allow public access.
- Build your React application using npm run build.
- Upload the build files to the S3 bucket.
- Enable static website hosting on the bucket and specify the index.html file as the entry point.
- Optionally, use Amazon CloudFront as a content delivery network (CDN) to improve performance and caching.

## Design Patterns

The project follows a modular design pattern, with separate components for different parts of the application. The components are designed to be reusable and configurable, promoting code reusability and maintainability. The Redux library is used for state management, allowing centralized and predictable state handling across the application.

- **Redux (State Management)**: Redux is used for managing the application's state. It provides a predictable state container and facilitates state updates through actions and reducers.

- **React Router (Routing)**: React Router is used for handling different routes within the application. It allows for easy navigation between pages and ensures a smooth user experience.

- **React OAuth Google (Authentication)**: React OAuth Google library is used for implementing Google OAuth authentication in the application. It provides a convenient way to integrate Google login functionality.

## Security - Securing the Home Page:

To secure the home page from unauthorized access, the project utilizes authentication through `authActions` and `authReducers`. Users can log in using their Google account or enter the email & password, and only authenticated users can access the home page. The authentication process ensures that only authorized users can view and interact with the portal's features.

- Implemented authentication and authorization mechanisms to restrict access to authorized users only.
- Secured login system with proper user authentication.
- Implemented route protection by checking user authentication status before allowing access to protected routes.


## Code Overview

The frontend solution consists of the following key files and directories:

- `actions/userActions.js`: Contains actions for fetching users and defining action types. It uses `axios` to make HTTP requests to the backend API.

- `actions/userReducer.js`: Defines the user reducer responsible for updating the user data and error state.

- `components/Home.js`: Represents the Home component, which displays user data and handles filtering, pagination, and page size. It utilizes `useSelector` and `useDispatch` from Redux for accessing the state and dispatching actions.

- `components/Login.js`: Represents the Login component, which displays the Google login button and handles successful login using React OAuth Google library.

- `App.js`: The main App component defines the application's routes using React Router. It also provides the Google OAuth client ID for authentication.

- `index.js`: Sets up the Redux store and renders the App component within the `Provider` to enable access to the Redux store throughout the application.

- `rootReducer.js`: Combines the userReducer for managing user data using Redux's `combineReducers` function.

Feel free to explore these files for a deeper understanding of the code structure and implementation.

## Authentication With/ Without react-oauth Plugin

I wanted to provide a more comprehensive perspective, so I also developed a manual authentication process. Both methods utilize the same powerful actions to authenticate users.

To make it happen, I've designed the `actions/authActions.js` file with all the necessary action creators and actions to handle the authentication process. The `actions/authReducer.js` file takes charge of managing the authentication state through a well-defined reducer. And of course, I've crafted an elegant and user-friendly login component in `components/Login.js`, where users can enter their email and password for authentication. Once the authentication succeeds, our solution seamlessly redirects users to the highly secure home page, where they can access portal's home page. 


## Getting Started

To run the frontend solution locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/mohit5783/zurich-fe.git
```

Install the dependencies:

```bash
cd zurich-fe
npm install
```

Start the development server:

```bash
npm start
```

The application will be accessible at http://localhost:3000.

### Login Details

```bash
UserName: user@example.com
Password: password
```

Conclusion
The Zurich-Frontend repository provides a frontend solution built using React, Redux, and other related technologies. It utilizes design patterns such as Redux (state management), React Router (routing), and React OAuth Google (authentication) to create a robust and user-friendly application.

If you have any questions or need further assistance, please don't hesitate to reach out. Feel free to explore the Zurich-Frontend repository and unleash the power of frontend development!
