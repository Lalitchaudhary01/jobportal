# Job Portal Application

A Fullstack Job Portal Application built using **ReactJS**, **Express**, **NodeJS**, and **MongoDB**. This project provides a platform for users to search and apply for jobs, companies to post job listings and manage applicants, and administrators to manage the platform.

## Features

### User Features
- User Registration and Login (with JWT authentication).
- Profile creation and editing.
- Browse and search for jobs.
- Apply for jobs with attached resumes.

### Company Features
- Register and manage company profiles.
- Post, update, and delete job listings.
- View applicants for specific job postings.
- Update application statuses.

### Admin Features
- Manage users and companies.
- View and filter job listings.
- View and manage job applications.

### Additional Features
- Pagination and filtering of job listings.
- Job description pages.
- File upload functionality for resumes and profile pictures.
- Smooth animations using Framer Motion.
- Persistent state management using Redux Toolkit.

## Tech Stack

### Frontend
- **ReactJS**: For building the user interface.
- **Vite**: For fast and efficient development.
- **ShadCNUI**: For styled and reusable components.
- **Redux Toolkit**: For global state management.
- **Framer Motion**: For animations.

### Backend
- **Node.js**: As the runtime environment.
- **Express.js**: For building RESTful APIs.
- **Multer**: For file uploads.

### Database
- **MongoDB**: For storing application data.

### Tools and Libraries
- **JWT**: For secure authentication.
- **bcrypt.js**: For password hashing.
- **Postman**: For API testing.
- **Git & GitHub**: For version control.

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-repo>/job-portal.git
   cd job-portal/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The application should now be running at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Folder Structure

```
job-portal/
├── backend/
│   ├── models/          # Mongoose models (User, Job, Company, Application)
│   ├── controllers/     # API controllers
│   ├── routes/          # Express routes
│   ├── middleware/      # Authentication and other middlewares
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point for the backend
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # Redux slices and store
│   │   ├── hooks/       # Custom React hooks
│   │   ├── assets/      # Static files
│   │   └── App.js       # Main React component
│   └── vite.config.js   # Vite configuration
└── README.md
```

## API Endpoints

### User Routes
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in a user.
- `GET /api/users/profile`: Get user profile (protected).
- `PUT /api/users/profile`: Update user profile (protected).

### Job Routes
- `GET /api/jobs`: Get all job listings.
- `POST /api/jobs`: Create a new job (protected for companies).
- `PUT /api/jobs/:id`: Update a job listing (protected for companies).
- `DELETE /api/jobs/:id`: Delete a job listing (protected for companies).

### Application Routes
- `POST /api/applications`: Apply for a job (protected for users).
- `GET /api/applications`: Get all applications (protected for companies).

### Admin Routes
- `GET /api/admin/users`: Get all users.
- `GET /api/admin/jobs`: Get all job listings.
- `GET /api/admin/companies`: Get all companies.

## Roadmap
- Improve search and filtering for job listings.
- Add real-time notifications for applications.
- Implement user dashboards for better data visualization.
- Optimize performance and scalability.

## Contributing
Feel free to fork the repository and submit pull requests. All contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.
