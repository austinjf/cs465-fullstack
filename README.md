## cs465-fullstack
CS-465 Full Stack Development with MEAN


## Architecture
# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Initially, the full stack project was a client facing multi-page application (MPA) that used handlebars (HBS) for templating the views. The MPA would take the data from MongoDB where, using Node.js and Express, it would construct the views server-side and send the HTML, CSS, and JavaScript to the client’s browser for viewing. As the application developed, an administrative SPA was added allowing data in the database be added/edited from the client-side (administrator). By using a SPA, the server offloads the heavy computation of constructing views to the client’s machine. This way, the SPA saves the server resources and allows for a dynamic and rich UI for the client-side.

# Why did the backend use a NoSQL MongoDB database?
MongoDB is a non-relational database (NoSQL) and stores data in BSON documents. The data does not need to conform to a schema and each document is built on a key-value pair structure. This structure is very similar to how data is stored in JSON, so using a NoSQL database like MongoDB makes development easier if the data is already stored in a JSON format.


## Functionality
# How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON is a format for how data is stored and represented. JavaScript is a programming language that is used on both the frontend and backend of the application. JSON stands for JavaScript Object Notation and stores/represents data in key-value pairs. Whether on the frontend or the backend, the data exists in a JSON format at any point in the application lifecycle.

# Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
I refactored the trip-data.service TypeScript file, as it contained methods that interacted with user data. I put these methods in a separate trip-data.service file for better readability. This will also make the code easier to maintain in the future as other data serices are added for things like rooms, meals, and news. Reusable UI components are beneficial as they keep your code modular and DRY. As an example, the trip-card is a reusable UI component that is only written once but represents all the trips that exist in the database.


## Testing
# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
The methods used in this application are GET, PUT, and POST. In this application that manages data using the four CRUD operations, the following HTTP methods are used: GET (read), POST (create), and PUT (update). In a future update the DELETE method could be used for the last CRUD operation: delete. There are several API endpoints in this application:
•/api/trips (GET, POST)
•/api/trips/:tripCode (GET, PUT)
•/api/login (POST)
•/api/register (POST)
•/api/meals (GET)
•/api/rooms (GET)
Each endpoint has one or more HTTP methods associated with it. It’s through these endpoints the frontend part of the application can make an API call to the backend to retrieve/send data from/to the database. As for security, this application makes use of web tokens that are stored in the client’s browser for login session management. 


## Reflection
# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course aligned perfectly with my professional goals. My professional goal is to become a software developer, but more specifically I would like to eventually work my way to full stack developer. Learning the MEAN stack, along with Git version control and understanding how a dynamic frontend web application framework like Angular works will undoubtedly contribute towards my future success in this career field.