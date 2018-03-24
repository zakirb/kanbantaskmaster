Just getting the boilerplate going.

# Project Workflow Organizer

Project 3 - GA

Team: Zakir B, Daniel V, Tim H

## User Stories:


## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

HTML, CSS, jQuery, Javascript, Bootstrap,
Node, Express, EJS Layouts, Bcrypt, Passport,
PG, Sequelize, Connect Flash, Morgan and Custom Middleware

## Getting Started
* Run `npm install` to install dependencies

### Wire Frames

### Models

### CRUD Routes
Verb | Path | Action | Used for
------------ | ------------- | ------------ | -------------
GET | / | read | - returns index/home page
GET | auth/signup | read | - returns HTML for the signup page
POST | auth/signup | create | - create new user account
GET | auth/login | read | - returns HTML for to login page
POST | auth/login | create | - confirms user account credentials and opens new session
GET | auth/logout | read | - logs user out of current session
GET | user/profile | read | - returns HTML view of the user profile
GET | edit/profile/:id | read | - returns HTML form to update the user profile
PUT | update/:id | update | - updates user profile data
DELETE | delete/:id | delete | - deletes user profile and all associated data

#### Development Process
