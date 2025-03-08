# My Contacts, My Way - Powered by React
**My Contacts, My Way - Powered by React** is a simple and responsive contact manager app built with React. It allows users to add, edit, and view contacts with details like name, contact number, email, and more, using a clean and minimal interface. The app is powered by React Router for navigation and JSON Server for handling CRUD operations.
### Features
- **Add, Edit, and View Contacts**: Users can manage their contacts with ease.
- **React Router**: Seamless navigation between pages.
- **Backend**: JSON Server for handling API requests (CRUD operations).
- **Responsive Design**: Optimized for both desktop and mobile devices.
### Screenshots
- **Home Page**  
  ![HomePage.png](https://github.com/er-anubhavgoel/MyContacts-MyWay-PoweredByReactJS/blob/main/public/HomePage.png)
- **Add Contact Page**  
  ![AddContactPage.png](https://github.com/er-anubhavgoel/MyContacts-MyWay-PoweredByReactJS/blob/main/public/AddContactPage.png)
  
### Project Structure
```plaintext
mycontacts/
├── public/
│   ├── HomePage.png            # Screenshot of the homepage
│   ├── AddContactPage.png      # Screenshot of the Add Contact page
├── src/
│   ├── components/             # Reusable components
│   │   └── navbar/             # Navbar component
│   │       ├── Navbar.jsx
│   │       └── navbar.module.css
│   ├── pages/                  # Different pages of the app
│   │   ├── home/               # List contacts
│   │   │   ├── Home.jsx
│   │   │   └── home.module.css
│   │   ├── addcontact/         # Add new contact form
│   │   │   ├── AddContact.jsx
│   │   │   └── addcontact.module.css
│   │   ├── editcontact/        # Edit contact form
│   │   │   ├── EditContact.jsx
│   │   │   └── editcontact.module.css
│   │   └── Layout.jsx          # Main Layout for routing and structure
│   ├── router/                 # For routing related components
│   │   └── Router.jsx          # Setup React Router
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point for React
|   └── global.css              # Global styles
└── index.html                  # Main HTML file
```
### How to Use the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/er-anubhavgoel/My-Contacts-My-Way.git
   cd My-Contacts-My-Way
   ```
2. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```
3. **Start the JSON Server**:
   To run the JSON Server for handling API requests, use the following command:
   ```bash
   npx json-server --watch api.json --port 5000
   ```
   This will start the backend server on `http://localhost:5000`.
4. **Run the React App**:
   After starting the JSON Server, you can run the React app with:
   ```bash
   npm start
   ```
   This will start the React development server and you can open the app at `http://localhost:3000`.
### Technologies Used
- **React**: For building the user interface.
- **React Router**: For routing and navigation between pages.
- **JSON Server**: To simulate a backend for CRUD operations.
- **CSS Modules**: For scoped CSS styles.
- **Axios**: For making API requests.
### Contributing
1. **Fork the Repository**:
   Click the **Fork** button on GitHub to create a personal copy of the repository.
2. **Clone the Forked Repository**:
   ```bash
   git clone https://github.com/your-username/My-Contacts-My-Way.git
   ```
3. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Commit and Push Changes**:
   ```bash
   git commit -m "Add your feature"
   git push origin feature/your-feature
   ```
5. **Create a Pull Request**:
   Open a pull request to propose your changes to the original repository.
### Contact Information
Feel free to reach out for any questions or suggestions:
- **Anubhav Goel**
- **Email**: anubhavgoel0520@hotmail.com
- **LinkedIn**: [Anubhav Goel](https://www.linkedin.com/in/anubhav-goel-123456789/)
- **GitHub**: [er-anubhavgoel](https://github.com/er-anubhavgoel)
---
### GitHub Repository: [MyContacts-MyWay-PoweredByReactJS](https://github.com/er-anubhavgoel/MyContacts-MyWay-PoweredByReactJS)
