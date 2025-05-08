#pagebreak()
= Design

== UI

Users of ChemWeb, upon loading the website, will be presented the first page hosting a spread of randomly selected methods and a menu bar at the top. At the bottom of this page is a footer with various contact links. 

=== Navbar
The menu bar is part of the layout, and as such will appear to the user on every page in the website. It will allow them to:
+ Go to the first page
+ Search for Methods
+ Log into their existing account
+ Register a new account

#figure(
  image("navbar.png"),
  caption: [The navbar]
) <navbar>

Upon logging in, the login and register buttons will be replaced with a label showing the user's username and profile picture:

#figure(
  image("image.png"),
  caption: [A logged in user named "Test"]
) <user>

This label contains a dropdown menu that provides links to pages that can only be accessed by a logged in user such as the settings page or the new method page.

#figure(
  image("Dropdown.png"),
  caption: [The dropdown menu]
)

=== Front Page
The front page will be the first page that the user sees when they load the website. It will contain a random assortment of methods fetched from the database in a grid formation.

#figure(
  image("MainPage.png", width: 70%),
  caption: [The first page]
) <frontpage>

Each of the methods on the main page will be shown to the user as in @methodbox, displaying their title, author, a brief description, a set of tags and an image. The user can click these to be taken to the associated method page which will go into further detail with a list of steps.

#figure(
  image("image-1.png", width: 50%),
  caption: [A methodbox]
) <methodbox>


Each of these parts are components that can be reused indefinitely with different data, allowing the front page to be dynamically updated with new methods.

=== Method Page
When a user clicks a method box on the front page, they will be taken to the corresponding method page. This page contains all of the data present in the method box along with an additional image carousel as well as a list of steps that the user can follow to replicate the method.

The name of the method page in the file structure is `method:[methodID=id]`. This is a dynamic route that will show different content depending on the id in the url. The `MethodID` is the primary key of the method in the database and is used to fetch the data from the database. The `id` part of the route corresponds to the match function that is exported from `/src/params/id.ts`. This function is a regex that matches to the format of the method ids in the database, which are all cuids. This id is then used to fetch the method from the database in the page's server file. The method is then passed to the page as a prop, allowing it to be displayed in the method page. 
The method page will also contain a list of steps that the user can follow to replicate the method. These steps are stored in the database as a list of strings and are displayed in a list format on the page.

#figure(
  image("MethodPage.png", width: 70%),
  caption: [The Method page]
) <methodpage>

== Logging in
The user will need to be able to log in to the website in order to enable functionality such as creating new methods or commenting on existing methods.
In order to log in, the user will have to navigate to the login page using the login button on the navbar at the top of their screen. 

Alternatively, if the user does not already have an account, they will be able to register a new account with the register button.
When clicking the login button, the user will be met with the following page: 

#figure(
  image("image-2.png", width: 70%),
  caption: [The Login page]
)

The user will be prompted for their username and password in order to log in. A successful login will create a JWT cookie to verify that the user is logged in and to make sure that they stay logged in between visits to the website.

=== JWT
The JWT or JSON Web Token is a secure token that encodes JSON data that can be used elsewhere. The token is comprised of 3 parts:

+ The Header: Contains data about the token like the algorithms used for message authentication and content type
+ The Payload: Contains the custom data like issuer, subject and expiry date
+ The Signature: The part of the token that ensures security with a digital signature

The first part of the JWT, the header, contains data about the hashing algorithm used for the signature and the type of data contained within the payload. The algorithm that is used for the tokens in ChemWeb is `HS256`, meaning the signature is generated using HMAC with SHA256.

The payload for the token created when a user logs in will be structured in the format below: #footnote([Taken from `/src/routes/login/+page.server.ts`])

```TS
let jwtpayload = {
  'iss': 'chemweb',
  'sub': username,
  'iat': new Date().getTime()
};
```
The above definition for a payload contains data about the issuer, which is usually the organisation that issued the cookie. In this case, the issuer is ChemWeb. This can be used to verify the source of the JWT as all tokens from that issuer will have the same `iss` field
The second field in this JWT is the `sub` field. This is used to specify the subject of the token which in this case is the username of the user that has logged in. This is referenced later to gather data from the database pertaining to the user. 
The final field contains the time that the token was issued at. This can be used to expire the token after a timeframe to ensure that old tokens cannot be used, this could compromise the security of logged in accounts as anyone could use any valid jwt that has existed to get into a user account.

The final part of a JWT is the signature that ensures security by containing a signature made with a private key stored in the server `.env` file. The signature is generated using HMAC#footnote([https://en.wikipedia.org/wiki/HMAC]) with SHA256#footnote([https://en.wikipedia.org/wiki/SHA-2]) as stated in the header. 

==== HMAC with SHA256
HMAC (Hash-based Message Authentication Code) is a piece of information used to verify the authenticity of a message and that it has not been tampered with.
HMACs are generated using a hashing algorithm and a secret key. The hashing algorithm used in ChemWeb is SHA256, which is a cryptographic hash function that takes an input and produces a hash that is 256 bits long. This hash is unique to the input and is irreversible, meaning there is no inverse process to convert the hash back to the original input.

The secret key is a random string of characters that is used to generate the HMAC. This key is stored in the server's `.env` file and is not shared with clients. The HMAC is generated by combining the message data with the secret key and hashing it using the SHA256 algorithm. This produces a unique hash that is then run through the SHA256 algorithm again with the key to produce the final HMAC. This HMAC is then encoded using a url friendly form of base 64 encoding to produce the JWT signature.

Because HMAC is a symmetric algorithm, the same key that is used to generate the signature is also the one to verify it, unlike with an RSA signature where there is a public and a private key. 

The three parts of the JWT are then concatenated with period (`.`) characters to form the final JWT that is sent to the client and stored in a cookie. This cookie is then used to prove that the user is logged in and to access protected routes on the server such as those in the `/(authorised)` directory.

=== Cookies

Cookies are pieces of data stored on a client's computer by the browser. ChemWeb makes use of cookies to store the JWT created when a user logs in to enable functionality that is locked behind authentication.
The cookie is created when the user logs in and is stored in the browser. If the user then attempts to access a protected route, the server will check for the presence of the cookie. If it is present, the server will decode the JWT and verify its signature using the secret key stored in the `.env` file. If the signature is valid, the server will allow access to the protected route. If it is not present or invalid, the user will be redirected to the login page so that they may log in to access the route. 

The cookies are created with settings to mitigate the risk of malicious actors and XSS attacks by setting the `HttpOnly` and `Secure` flags. The `HttpOnly` flag prevents the cookie from being accessed by client-side JavaScript or TypeScript, meaning that it cannot be stolen by an attacker using cross site scripting. The `Secure` flag ensures that the cookie is only sent over HTTPS connections, preventing it from being intercepted by an bad actor on an unsecured connection.

== Registration
The user will be able to register a new account for ChemWeb by clicking the register button on the navbar when not logged in. This will direct them to the registration page which will prompt the user for a username, password and email address in a form similar to the login page.
#figure(
  image("Registration.png", width: 70%),
  caption: [The Registration page]
)

When a user fills out the form and clicks the register button, the data will be sent to the server where it will be validated. The email address must be in a valid format and the username must be unique. The two password fields must match in order to ensure that the user has entered their password correctly. 



The username must be unique and not already in use by another user in order to successfully create a new account. The password will be hashed using Argon2#footnote([https://en.wikipedia.org/wiki/Argon2]) before being stored in the database. This is to ensure that the password is not stored in plaintext and cannot be easily accessed by an attacker if the database is compromised. 

== Creating a method
The user will be able to create a new method by clicking the `Create Method` button in the dropdown menu of their profile when logged in. This will take them to the new method page where they will be able to enter the details of a new method. The page contains a form that prompts the user for the title, description, author, images and a list of steps that can be followed to replicate the method. The user will also be able to add tags to the method to make it easier to search for.

#figure(
  image("NewMethod.png", width: 70%),
  caption: [The New Method page]
)

The user is able to add steps to the method by clicking the `Add` button above the steps list. 

When the user clicks the `Create Method` button, the data will be sent to the server where it will be validated. If all of the data is valid, the method will be created and stored in the database.


== Database
The database for ChemWeb will manage multiple many to many relationships as can be seen in the entity relationship diagram below that shows the structure of the database.
Effort has been made to make the database's models smaller where possible to reduce their footprint whenever they are being referenced.

The user model is the most commonly accessed part of the database, storing a registered user's email, username, their password hashed using argon2 and the date that their account was created on. The user model also contains links to the user's profile, settings, comments and a list of created methods.

The user's profile contains information used for their account page, showcasing their badges and created methods. 

#figure(
  image("image-3.png"),
  caption: [An ERD for the database schema]
)

The many-to-many relationships in the ERD have been omitted for clarity, but they are present in the database. The relationships are managed using a linking table that contains the foreign keys of both models. This allows for querying of the data and ensures that the data is normalized.

The `Method` model contains the data for the methods that are displayed on the website. It contains a title, description, author, images and a list of steps that can be followed to replicate the method.

The method model also contains a list of tags that can be used to narrow down the theming of the methods. This is useful for searching for methods that are related to a specific chemical reaction or process. The tags are stored in a separate table and linked to the method using a many-to-many relationship. This allows for easy searching and filtering of methods based on their tags.

The file `database.ts` contains the code used to interact with the database. It contains the Prisma client that is used to query the database and create new records. A function like `getMethodByID` would be used by passing the method ID in to get all of the needed information for the method page. The `getRandomMethod` function would be used to get a random method from the database to display on the front page. 
All of the functionality for the database is contained in this file then imported into the server files that require specific access to parts of the database.


=== Prisma
PrismaORM is the object relational mapper that is used to interface with the database. Using Prisma removes a lot of the boilerplate SQL statements that are normally used to create and query the database. This allows for a more streamlined development process and reduces the amount of code that needs to be written.

Prisma's migration system is also a very useful tool to have during development as it allows for the altering of database structure without the need to manually recreate and repopulate the database. This is done by creating a `migration.sql` file that contains the SQL statements needed to alter the database. This file is then run by Prisma to make the needed changes. 
 