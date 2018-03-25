Just getting the boilerplate going.

# Project Workflow Organizer

Project 3 - GA

Team: Zakir B, Daniel V, Tim H
- A link to your hosted working app in the URL section of your Github repo
- A team git repository hosted on Github, with a link to your hosted project, and frequent commits from every team member dating back to the very beginning of the project.


## User Stories:
- Gene is the owner of a small start-up business and needs a way to keep his handful of employees on task. {insert site name here} helps by allowing Gene to add team members and assigning tasks to each one and monitor their progress.
- Mary is a single mother of 3 and working two jobs and uses {insert site name here} to keep track of the chores and homework her kids are doing while she’s at work. She can sign in on her phone and see what has been done and what’s remaining.


## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Redux, Redux-Thunk, React, React-Router, MongoDB, Mongoose, Express, Express-JWT, Passport, Bcrypt, Body-Parser, Connect-Flash, Cookie-Parser, DotEnv, JSONWebToken, Materialize UI

## Getting Started
* Run `npm install` to install dependencies

### Wire Frames

### Models

### CRUD Routes
Verb | Path | Action | Used for
------------ | ------------- | ------------ | -------------
GET | / | read | - returns index/home page
GET | auth/signup | read | - returns the signup and login component (if no user token)
POST | auth/signup | create | - retrieves signup component
GET | auth/login | read | - retrieves login component
POST | auth/login | create | - confirms user account credentials and opens new session
GET | auth/logout | read | - logs user out of current session
GET | user/profile | read | - returns the user profile component

GET | edit/profile/:id | read | - returns HTML form to update the user profile
PUT | update/:id | update | - updates user profile data
DELETE | delete/:id | delete | - deletes user profile and all associated data

#### Development Process
##### Day 1 (Sunday)
- Brainstorm ideas for project, decided on technologies, design wireframes, discussed data/model needs and app workflow,
- Created GitHub repo and set up local branches, discussed the workflow for the week, milestones
Researched topics new to the team

##### Day 2 (Monday)
- Imported agreed upon technologies, refactored existing pages with some Material-UI examples, created site skeleton, begin building navigation, models and basic views, refactoring views and adding needed components, implemented redux and store.

#### Day 3 (Tuesday)
- Continued developing routes and components, and building models, developed user stories, researched Material UI, mongoose and mongoD.

#### Day 4 (Wednesday)
- Seeded Projects Model, continued working on forms and implementation of Material UI, issues with the model schema delayed us, pulled some functionality from original spec.

#### Day 5 (Thursday)
-

#### Day 6 (Friday)
-

#### Day 7 (Saturday)
-

#### Day 8 (Sunday)
- 


#### unsolved problems && major hurdles
- racing issues
