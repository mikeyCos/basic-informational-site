# Changelog
---
### 06 AUG 2024
- Added `dev-express` script in `package.json`; this targets the Express `app`.
- Created `app.js` module for Express configuration.
---
### 05 AUG 2024
- Clicking on the `Home` link will fire a redirect to the root path, `/`, and end the response; i.e. `res.setHeader("Location", "/");`.
- An `if...else` statement is used to check if the request's URL ends with `.css`; if URL does not end with `.css` a `switch` statement runs, otherwise, the `filepath` and `contentType` are assigned new values corresponding to style sheets.
- Each pages has a `nav` element and each anchor will send request to the server.
- Created boilerplate `html` pages and their respective style sheets: `404`, `about`, `contact-me`, and `index`.
- Created `styles` and `views` subdirectories in `public` directory.
- Created `server.js` module.
---
### 04 AUG 2024
- Installed `nodemon` in developer dependencies.
- Created `CHANGELOG.md` and `PROJECT_SPECIFICATIONS.md`.
- Created `basic-informational-site` repository and initial commit.
