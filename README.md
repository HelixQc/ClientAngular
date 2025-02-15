# **Angular Client Application** 🌐

Welcome to the **Angular Client Application**! This application provides a user-friendly interface for managing **user authentication**, **registration**, and interaction with **content** through comments and rules. It is designed to seamlessly integrate with the **REST_API_NODEJS** backend to provide a smooth and secure user experience.

---

## 🚀 **Project Overview**

This Angular client application is built to allow users to authenticate, register, and engage with content on your platform. Users can interact with content by adding comments and reviewing the platform’s rules. The client communicates with a Node.js-based REST API to handle all data management and user interactions.

This project is meant to work alongside the **REST_API_NODEJS** repository, which handles backend functionality, database management, and API endpoints.

---

## 📚 **Features**

- 🔐 **User Authentication**: Secure login and registration system to authenticate users.
- 💬 **Commenting System**: Allows users to post comments on content.
- 📜 **Rules Display**: Users can view platform rules to ensure proper conduct.
- 🛠️ **Integration with Node.js Backend**: Communicates with a RESTful API for data management and user authentication.
- 📱 **Responsive Design**: The application is fully responsive and designed to work seamlessly on both desktop and mobile devices.
- ⚙️ **CRUD Operations**: Users can create, read, update, and delete comments based on their permissions.

---

## 🛠️ **Setup Instructions**

### **Prerequisites**

Before you begin, make sure you have the following installed:

- 🖥️ **Node.js (v14 or higher)**: Required for running the Angular development server and managing dependencies.
- 🌐 **Angular CLI**: The Angular command-line interface for building and running the application.
- 🛠️ **REST_API_NODEJS Backend**: Ensure the Node.js backend is set up and running to handle the API requests.

### **Clone the Repository**

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/YourUsername/AngularClientApp.git
    ```

2. Clone the **REST_API_NODEJS** repository as well, and ensure the API is running on your local machine or the server where you host it.

    ```bash
    git clone https://github.com/HelixQc/REST_API_NodeJS.git
    ```

### **Install Dependencies**

1. Navigate to the `AngularClientApp` directory:

    ```bash
    cd AngularClientApp
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

### **Configure API URL**

Ensure the client application points to the correct backend by modifying the API URL in the environment configuration file. Open `src/environments/environment.ts` and update the `apiUrl` to match your backend URL:

## 🛠️ **Run the Application**

To start the Angular client application in development mode, run the following command:

```bash
ng serve
```


## 📊 How It Works

### **User Authentication**
Users can log in or register using the forms provided in the application.  
Authentication is handled by the REST API and stored via JWT (JSON Web Tokens) for secure, stateless login sessions.

### **Comment System**
Logged-in users can post comments related to various content on the platform.  
The client fetches and displays comments through API calls to the backend.

### **Viewing Rules**
The platform's rules are displayed to the user in a dedicated section, ensuring users understand the guidelines for interaction.

### **CRUD Operations**
Depending on user permissions, they can create, edit, and delete comments. All changes are reflected in real-time through API communication.

---

## ⚠️ Disclaimer
This application is intended to be used with the REST_API_NODEJS backend.  
It is designed for educational purposes and may not be fully optimized for production environments. Ensure your backend API is secure and fully functional before deploying this client to a live environment.

---

## 🛡️ License
This project is licensed under the MIT License. By using, modifying, or distributing the code, you agree to the following terms:

- 🏷️ **Ownership**: All intellectual property rights, including but not limited to the source code, design, and architecture, are owned by **Your Name**.
- ❌ **Restrictions**:  
    You are free to use, copy, modify, and distribute the software for personal, educational, or commercial purposes, as long as the copyright notice is included.  
    **Your Name** is not responsible for any issues or damages that arise from the use or misuse of this system.
- 🔐 **Usage**:  
    Feel free to use this software for learning or personal projects—just make sure to respect the terms of the license.

---

## 💬 Questions or Feedback?
If you have any questions, suggestions, or feedback, feel free to reach out.  
We hope you enjoy using this Angular client application and its seamless integration with the backend API!
