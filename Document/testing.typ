= Testing

#table(
  columns: 3,
  table.header(
    text("Test", size: 16pt),
    text("Description", size: 16pt),
    text("Result", size: 16pt)
  ),
  [1], [Access the website through http], [Passed],
  [2], [Account Creation], [Passed],
  [3], [Allow a user to log in], [Passed],
  [4], [Allow a user to browse methods on the main page], [Passed],
  [5], [Allow a user to create their own methods], [Passed],
  [6], [Allow a user to edit and delete their methods], [Failed],
  [7], [Allow a user to like methods], [Failed],
  [8], [Allow a user to comment on methods], [Failed]
)

== Objective 1
The first test was to check that a user could access the website through http. This was done by opening the website in a web browser and checking that it loaded correctly. The website loaded correctly and all links worked as expected. This test passed.

#figure(
  image("MainPage.png", width: 80%),
  caption: "The main page of the website rendered on a browser"
)

== Objective 2
The second test was to check that a user could create an account. This was done by filling out the registration form and checking that the account was created successfully. The account was created successfully and the user was able to log in with the new account. This test passed.

#figure(
  image("Registration.png", width: 60%),
  caption: "The registration page of the website rendered on a browser"
)

== Objective 3
The login functionality was tested and found to be working as intended. The login form was filled out incorrectly with a username and password that do not correspond to any user in the database. This returns an error message. The correct information was then used and the user was able to log in successfully. This test passed.

== Objective 4
The main page of the website was tested to check that a user could browse methods. This was done by clicking on the links to the methods and checking that they loaded correctly. The links worked as expected and the methods loaded correctly. This test passed.

== Objective 5
The method creation functionality was tested and found to be working as intended. The method form was partially filled out and submitted resulting in an error telling the user which parts were missing. The form was then filled out with the required information and the method was created successfully. The method was then checked to see if the correct data was on the method page, the data was correct. This test passed.

#figure(
  image("NewMethod.png", width: 60%),
  caption: "The method creation page of the website rendered on a browser"
)

== Objective 6
There is currently no way to edit or delete a method once it has been created. This test failed.

== Objective 7
There is currently no way for a user to like a method. This test failed.

== Objective 8
There is currently no way for a user to comment on a method. This test failed.


In order to implement these features, the following changes will need to be made:
- Add a button to the method page that will allow the creator only to edit or delete the method.
- Add a button to the method page that will allow any user to like the method.
- Add a comment section to the method page that will allow any user to comment on the method.

