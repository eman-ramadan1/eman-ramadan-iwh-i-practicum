# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Put your HubSpot developer test account custom objects URL link here:** https://app.hubspot.com/contacts/l/objects/${custom-obj-number}/views/all/list

___
## Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account and include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR PRIVATE APP TOKEN TO YOUR REPOSITORY. 

## Pre-requisites:
- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements
- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least two new routes in your index.js file and one new pug template for the homepage.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.
- Integrating With HubSpot I: Foundations Practicum – Eman Ramadan

This project is my submission for the Integrating With HubSpot I: Foundations Practicum.
It is a Node.js application that integrates with HubSpot CRM using the HubSpot API to:

Display custom object records

Add new custom object records using an HTML form

Render pages using Pug templates

Communicate with HubSpot using Axios

The application was built using the following technologies:

Node.js

Express.js

Axios

Pug

dotenv

🔗 Custom Object List View (Required)

Here is the link to the custom object list view in my HubSpot test account:
👉<(https://app-eu1.hubspot.com/contacts/147389282/objects/2-195536657/views/all/list)>


📌 Features

GET homepage displaying all records from the custom object

GET route to render a form for adding a new record

POST route to submit form data to HubSpot and create a new custom object record

Uses HubSpot Private App Access Token securely via .env

📂 Project Structure
project-folder/
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── homepage.pug
│   └── updates.pug
│
├── .gitignore
├── index.js
├── package.json
└── README.md

🛠️ Installation & Setup
1. Install dependencies
npm install

2. Create a .env file in the root directory:
PRIVATE_APP_ACCESS_TOKEN=your_token_here
PORT=3000


⚠️ Do NOT commit your actual token to GitHub.

3. Run the application
node index.js

4. Open the project in your browser:
http://localhost:3000

✔️ Practicum Requirements Completed

Created a HubSpot developer test account

Created a private app with required permissions

Built a Node.js app with 3 routes

Created a custom object with at least 3 properties

Added at least 3 records

Associated custom object with contacts

Added homepage and form Pug templates

Integrated API calls using Axios

Committed code and pushed to GitHub using Git





