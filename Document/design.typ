= Design

== UI

Users of ChemWeb, upon loading the page, will be presented the first page hosting a spread of randomly selected methods and a menu bar at the top. At the bottom of this page is a footer with various contact links. 

=== Navbar
The menu bar is part of the layout, and as such will appear to the user on every page in the website. It will allow them to:
+ Go to the first page
+ Search for Methods
+ Log into their existing account
+ Register a new account


Upon logging in, the login and register buttons will be replaced with a label showing the user’s username and profile picture:
This label contains a dropdown menu that provides links to pages that can only be accessed by a logged in user such as the settings page or the new method page.
Methods on the main page will be shown to the user as such, displaying their title, author, a brief description, a set of tags and an image. The user can click these to be taken to the associated method page which will go into further detail with a list of steps.

Each of these parts are components that can be reused indefinitely with different data, allowing the front page to be dynamically updated with new methods.
Logging in
The user will need to be able to log in to the website in order to enable functionality such as creating new methods or commenting on existing methods. In order to log in, the user will have to navigate to the login page using the login button on the navbar at the top of their screen. Alternatively, if the user does not already have an account, they will be able to register a new account with the register button.
When clicking the login button, the user will be met with the following page: 
The user will be prompted for their username and password in order to log in. A successful login will create a JWT cookie to verify that the user is logged in and to make sure that they stay logged in between visits to the website. 

== Database
The database for ChemWeb is quite complex, managing multiple many to many relationships as can be seen in the entity relationship diagram below that shows the structure of the database.
Effort has been made to make the database's models smaller where possible to reduce their footprint whenever they are being referenced.
The user model is the most commonly accessed part of the database, storing a registered user's email, username, their password hashed using argon2 and the date that their account was created on. The user model also contains links to the user’s profile, settings, comments and a list of created methods.
The user’s profile contains information used for their account page, showcasing their badges and created methods. 

