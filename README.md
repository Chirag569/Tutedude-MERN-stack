
### README File for Tutedude MERN Stack Assignment

---

# **Tutedude MERN Stack Assignment**

## **Project Overview**
This project is a MERN stack application developed as part of an assignment for Tutedude. The application allows users to manage their friend lists, including adding friends, searching for users, and viewing mutual friends. It focuses on demonstrating full-stack development skills using MongoDB, Express.js, React.js, and Node.js.

---

## **Key Features**
1. **User Authentication**:
   - Secure user registration and login using JWT authentication.
   - Passwords are securely hashed using bcrypt.

2. **Friend Management**:
   - Add friends and manage friend requests (send, accept, or reject).
   - View a list of added friends and unfriend users if necessary.

3. **Search Users**:
   - Search for other users by username or email.
   - View user profiles and send friend requests.

4. **Mutual Friends**:
   - View a list of mutual friends between users.

5. **Friend Recommendations**:
   - Recommend friends based on mutual connections and shared interests (if included in the profile).

---

## **Technologies Used**

### **Frontend**:
- React.js
- Context API/Redux for state management
- Tailwind CSS/Bootstrap for styling

### **Backend**:
- Node.js
- Express.js
- MongoDB with Mongoose ORM
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

---

## **Installation and Setup**

### **Prerequisites**
Ensure the following are installed on your system:
- Node.js
- MongoDB
- npm or yarn package manager

### **Steps to Run the Application**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/tutedude-mern-assignment.git
   cd tutedude-mern-assignment
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following details:
     ```
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     PORT=5000
     ```
   - Replace `<your_mongodb_connection_string>` and `<your_jwt_secret_key>` with appropriate values.

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend server:
   ```bash
   cd ../frontend
   npm start
   ```

7. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## **API Endpoints**

### **Authentication**
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.

### **Friends**
- `GET /api/users/friends/:userId`: Get a list of friends.
- `POST /api/users/add-friend`: Send a friend request.
- `POST /api/users/accept-request`: Accept a friend request.
- `POST /api/users/reject-request`: Reject a friend request.
- `GET /api/users/mutual-friends/:userId/:friendId`: Get mutual friends between two users.

---

## **Folder Structure**

```
tutedude-mern-assignment/
│
├── backend/
│   ├── controllers/       # API route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Entry point for the backend
│
├── frontend/
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # State management
│   │   └── App.js         # Main React app
│   └── package.json       # Frontend dependencies
│
├── README.md              # Project documentation
└── package.json           # Root dependencies
```

---

## **Future Enhancements**
- Implement friend suggestions based on user preferences and interests.
- Add a chat feature for real-time communication.
- Enhance the UI/UX for better usability.

---

## **License**
This project is licensed under the MIT License.

---

Feel free to modify the README content to fit your specific project structure or add additional details as necessary.
