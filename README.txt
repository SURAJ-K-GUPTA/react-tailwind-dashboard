
# React Tailwind Dashboard

This project is a responsive web application built using **React** and **Tailwind CSS**. It includes user authentication, a dynamic dashboard, and a task management system. The backend is powered by **Vercel's serverless functions** to manage user authentication and task data.

## Project Links
- **Hosted Application**: [React Tailwind Dashboard](https://react-tailwind-dashboard-destion.vercel.app/)
- **GitHub Repository**: [Source Code on GitHub](https://github.com/SURAJ-K-GUPTA/react-tailwind-dashboard)

## Features
- **Responsive Design**: Built with Tailwind CSS to ensure compatibility across devices (desktop, tablet, and mobile).
- **User Authentication**: Includes login, sign-up, and forgot password functionalities, powered by serverless functions on Vercel.
- **Protected Dashboard**: The dashboard is only accessible to logged-in users, featuring a task manager that supports adding and removing tasks dynamically.
- **Serverless Backend**: Vercel serverless functions handle API requests, replacing the need for a traditional backend.

## Login Credentials
To access the dashboard, use the following credentials:
- **Email**: `john@example.com`
- **Password**: `password123`

## How to Use Vercel Locally

To test and run the serverless functions and React application locally using **Vercel CLI**, follow these steps:

### Prerequisites
- Make sure you have **Node.js** and **npm** installed on your system.
- Install **Vercel CLI** globally:
  ```bash
  npm i -g vercel
  ```

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SURAJ-K-GUPTA/react-tailwind-dashboard.git
   cd react-tailwind-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Vercel Dev Environment**:
   - Log in to your Vercel account (if not already logged in):
     ```bash
     vercel login
     ```
   - Start the local development server:
     ```bash
     vercel dev
     ```
   This command will start a local server, which mimics the Vercel environment and runs your React application along with the serverless functions.

4. **Access the Application Locally**:
   - The application should be accessible at `http://localhost:3000`.
   - Serverless functions will be accessible under `/api` routes (e.g., `http://localhost:3000/api/users`).

## Project Structure

```
react-tailwind-dashboard/
├── api/                     # Vercel serverless functions for user and task management
├── src/                     # React application source code
│   ├── components/          # Reusable components (Auth, Dashboard, etc.)
│   ├── context/             # Context for authentication
│   ├── utils/               # Utility components and helpers
├── public/                  # Static files
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Usage
- Clone the repository, install dependencies, and run locally using the instructions above.
- To deploy, push the code to a GitHub repository connected to Vercel or use the Vercel CLI (`vercel deploy`).

## Technologies Used
- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Vercel**: Hosting and serverless functions
- **React Router**: For client-side routing

## License
This project is open-source and available for anyone to use.
