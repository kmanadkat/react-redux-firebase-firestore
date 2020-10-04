## React Redux with Firebase Full Stack Project

It contains firebase authentication, firestore for storing data & notifications via firebase cloud functions. It is hosted with firebase hsoting. In this project user can Register with email & password. After that user can view dashboard where projects created by all users are visible, one can click project card to see project details in different route. Each time a new user signs up or creates a project then all loggedin users are notified in Notification section of dashboard.


### Project Demo 🎬

[![React Redux Firebase Project Demo](./poster.jpg)](https://youtu.be/VG-QFiRA6SE "React Redux Firebase Project Demo")


### Project Routes ⛳️

1. `/` Dashboard Route
2. `/login` Login Route
3. `/register` Register Route
4. `/create-project` Create New Project
5. `/project/:id` Project Detail Route


**Route Gaurding** or **Route Protection** is in place for all routes, following is the route visibility:

| Normal User                | Authenticated User                   |
|----------------------------|--------------------------------------|
| `/login` Login Route       | `/` Dashboard Route                  |
| `/register` Register Route | `/create-project` Create New Project |
|                            | `/project/:id` Project Detail Route  |


### Porject Packages & Dependencies 🕹

> React project is created with `create-react-app` & Firebase functions using `firebase init`

|Packages                 | Version  |
|-------------------------|----------|
| firebase                | v7.22.0  |
| moment                  | v2.29.0  |
| react                   | v16.13.1 |
| react-custom-scrollbars | v4.2.1   |
| react-dom               | v16.13.1 |
| react-redux             | v7.2.1   |
| react-redux-firebase    | v3.7.0   |
| react-router-dom        | v5.2.0   |
| react-scripts           | 3.4.3    |
| redux                   | v4.0.5   |
| redux-firestore         | v0.14.0  |
| redux-thunk             | v2.3.0   |
