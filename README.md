# Communication Tracker 

## Live Application
The app is live at: [My App](https://comtrackin.netlify.app)


**Communication Tracker** is a full-stack web application built with React for the frontend and Node.js/Express for the backend. The application helps users track professional communications with other organizations, manage tasks, and visualize key metrics. With separate interfaces for Admins and Users, the app allows companies to manage communication records and monitor upcoming tasks efficiently.

## Features

### Admin Module
- **Manage Companies**: Admins can add, edit, or delete company details (name, location, LinkedIn profile, contact information, etc.).
- **Manage Communication Methods**: Admins can configure different communication methods (email, phone calls, LinkedIn posts) and define their settings (sequence, description).
- **User Management**: Admins can manage user permissions and roles.

### User Module
- **Dashboard**: Displays a grid of companies, recent communications, and next steps.
- **Color-Coded Highlights**: Users can quickly identify overdue communications or tasks with color-coded highlights.
- **Communication Logging**: Users can log communications, add notes, and set future communication reminders.
- **Calendar View**: A calendar display for users to track past and upcoming communications.


## Admin and User Login Credentials

To access the **Admin** and **User** sections of the application, use the following credentials:

### Admin Credentials:
- **Username**: `admin@example.com`
- **Password**: `admin1234`

### User Credentials:
- **Username**: `user@example.com`
- **Password**: `user1234`

> **Note**: These credentials are pre-configured for demonstration purposes. For production environments, you should set up secure authentication systems like JWT, OAuth, etc.

## Screenshots


![AdminLogin Screenshot](/public/AdminLogin.png)
*The Login page designed for Admins.*

![AdminDashboard Screenshot](/public/AdminDashboard.png)
*The Dashboard showing recent communications and upcoming tasks.*

![UserLogin Screenshot](/public/UserLogin.png)
*The UserLogin Page specially designed for users.*

![UserDashboard Screenshot](/public/UserDashboard.png)
*The Dashboard showing recent communications and upcoming tasks.*



## Tech Stack

- **Frontend**: React.js, React Router, Redux (for state management), Tailwind CSS
- **Backend**: Node.js, Express, MongoDB (or any preferred database)
- **External Libraries**: Axios (for API calls), bcrypt (for password hashing), JWT (for token-based authentication)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (or Yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chandu0394/Communication-Tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Calendar-App
   ```

3. Install dependencies for both the backend and frontend:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd Calendar-App
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the **backend** directory and add the following:

   ```bash
   MONGO_URI=mongodb://localhost:27017/calendarApp
   PORT= 5000
   ```

5. Start the development server:

   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm start
   ```

Your app should now be running at:
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

## Usage

### Admin Module

As an Admin, you can:
- **Manage Companies**: Add or update companies and their communication methods.
- **Assign Users**: Manage user roles and permissions.

### User Module

As a User, you can:
- **Log Communications**: Record interactions with companies, specifying the communication method and notes.
- **Set Reminders**: Schedule future communications and track them on the calendar.
- **View Dashboard**: See an overview of your communications and upcoming tasks.
- **Calendar View**: Visualize past and upcoming communications on a calendar.


## Directory Structure

```bash
communication-tracker/
│
├── backend/
│   ├── controllers/
│   │   ├── companyController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── company.js
│   │   └── user.js
│   ├── routes/
│   │   ├── companyRoutes.js
│   │   └── authRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminPanel.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Calendar.js
│   │   │   └── CommunicationLog.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── tailwind.css
│   ├── package.json
│   └── README.md
│
└── .gitignore
```

## Deployment

You can deploy the **Communication Tracker** on any cloud platform like Vercel, Heroku, or AWS. Follow the specific deployment instructions for the respective platforms.

### Deployment to Heroku

1. Push your code to GitHub.
2. Create a new Heroku app.
3. Connect your GitHub repository to Heroku.
4. Configure environment variables in the Heroku dashboard.
5. Deploy your app.

## Testing

To run tests for your application (if any are included):

```bash
npm test
```

## Contributing

We welcome contributions! Feel free to fork the repository, make changes, and submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or fix.
4. Make changes and commit them.
5. Push to your forked repository.
6. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React.js**: The powerful front-end library.
- **Node.js**: The event-driven backend JavaScript runtime.
- **MongoDB**: The NoSQL database for managing user data and communication records.

---

### Notes:
- Replace `your-username` with your actual GitHub username wherever necessary.
- Ensure that production-ready login systems (e.g., JWT, OAuth) are configured for secure authentication in your final deployment.

This README file now includes updated information, your GitHub username, backend setup, and the admin/user credentials. You can share this with anyone looking to run or contribute to your **Communication Tracker** application.

[def]: /public/AdminLogin.png
