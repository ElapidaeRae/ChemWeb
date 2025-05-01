#pagebreak()
= Analysis

== Introduction
ChemWeb is a website that allows users to create and share methods for chemical reactions. 

== Description
A website that can keep track of the ingredients and processes needed for a reaction, as written by a user of the platform.

An inspiration for this project were websites like Thingiverse, Instructables and Thangs; websites that allow users to share their creations with the world. These websites allow their users to upload and share the things that they have designed such as `.stl` files, 3d models or instructions for other people to use and learn from.

#figure(
  image("Thingiverse.png", width: 90%),
  caption: [Thingiverse],
)

Like Thingiverse for chemistry, allowing users to save and share methods for various reactions and syntheses. ChemWeb aims to cultivate a community of users that would allow methods to be improved over time with constant iteration.

No similar website seems to exist to fit this specific niche. ChemWeb provides a novel solution to a hitherto untouched problem, creating a central repository for methods to create chemicals.

== Technologies
The website will be built using a variety of different technologies to enable modular development and a cohesive user experience.

As this project will be using Svelte, most of it will be written in TypeScript and HTML.

I will make use of TailwindCSS for styling as I have prior experience with using it and know that its use is effective in creating visually cohesive UIs.

Using an ORM will allow for the effective organisation of the large amount of data going to and from a database. Due to this, I have elected to use PrismaORM as it allows me to define my models and interface with the database with a reduced risk of user error due to the objects limiting the shape of records in the database.

=== Svelte
Svelte uses a system of 'components' to modularise websites made with it. Each component can be infinitely reused anywhere in the website. In this they are akin to classes in that one template is defined and it can then be referred to in order to create an instance of that component. 
This allows for a more modular approach to web development, as each component can be developed and tested in isolation before being used in the final product.

A component is a file ending in `.svelte`. These files are self-contained blocks of HTML and TypeScript that can be used anywhere they are imported, as can be seen with the `MethodBox.svelte` component or the `LayoutBar.svelte`. 
These components can be nested inside each other, or used in multiple places in the website. 

Each component can have their own script tag, localised CSS and HTML with extra syntax added by Svelte that allows a developer to access features such as stores or add `if-else` statements or `each` statements to the HTML. 

Svelte pages, when used in conjunction with SvelteKit, can also use a few extra features such as `load` functions that can be used to fetch data from the server before the page is rendered. This allows for a more seamless experience for the user, as they will not have to wait for the data to load after the page has been rendered. This is especially useful for pages that require a lot of data to be fetched, such as the front page or the method page.

=== SvelteKit
SvelteKit is a framework that builds on top of Svelte to provide a full stack web application framework. It provides a routing system and server-side rendering for Svelte applications.
It allows for the creation of a full stack web application with a single framework, reducing the need for multiple frameworks to be used together and allowing for a more cohesive development experience. 
SvelteKit works similarly to other web frameworks like Angular, Django or Flask by providing a templating engine that complements Svelte components and allowing for separate server-side and client-side processing.

SvelteKit uses a file-based routing system. This means that the way the files and directories are arranged will reflect the routes for the website. Any files in the `test` folder will be associated with the `/test` route on the website. 

A file named `+page.svelte` in that directory will be the template used to render the page. As with all `.svelte` files, it can contain HTML, TypeScript and CSS that will be run when the page is loaded.

The `+page.server.ts` files are exclusively run on the server, meaning they can access private variables such as those in the `.env` file. As it starts with `+page`, values in this file can be passed into the page.

`+layout` files apply to every page below them in the file hierarchy. If they contain rendered HTML, they will include a `<slot>` tag for the rest of the page to render in.

=== SQLite
SQLite is a lightweight database that is designed to be embedded in applications. It stores its data in a single database file. This makes deployment simple as there is no need to set up a separate database server.

SQLite is a relational database, meaning that its data is stored in tables that can be related to one another for querying.
This allows for complex queries to be run on the data, such as joining multiple tables together to get a single result. This is useful for the ChemWeb website as it will allow for complex queries to be run on the data to get the information needed for the website.
SQLite is also a serverless database, meaning that it does not require a separate server to run. This makes it intuitive to deploy as it can be run on any server that supports SQLite.

=== PrismaORM
PrismaORM is an Object Relational Mapper that allows a programmer to define models that can translate the data in an object into a format suitable for a relational database. 

It serves as an abstraction layer between the SQL database and the functional code in the pages of the website.

Prisma uses a file called `schema.prisma` to define the models used in the database. The file is then used to create a client able to interface with the database.

=== JSON Web Token (JWT)

JWT is a standard for exchanging information securely with encrypted tokens that resolve to JSON.

The key to encrypt and decrypt the tokens is stored in the `.env` file on the server. The JWT payload contains a series of 'claims' such as the issuer of the JWT (`iss`), the subject (`sub`) or the token's expiration date (`exp`). These claims are then run through an algorithm such as SHA-256 to create the payload portion of the JWT. This is then concatenated with the header and signature separated by '.' to make the final token.

=== Argon2
Argon2 is a hashing library that provides functions for hashing data and comparing data to a hash. In this project it will be used for the login system. As storing user passwords as plaintext is inadvisable, they will be stored as a hash to provide a level of security, this hash will then be compared to the hash of an inputted password to check its validity. 

Hashing a password increases security by making it difficult to reverse engineer in order to recover the original passwords. This is done by using a one-way hashing algorithm that takes the password and runs it through a series of mathematical operations to create a fixed-length string of characters that is unique to that password.

Argon2 is designed to be resistant to brute force attacks by intentionally taking longer to compute hashes, meaning that it is difficult to reverse engineer the hash to find the original password. This would usually be done with something like a rainbow table, which is a precomputed table of hashes that can be used to reverse engineer the original password.

Argon2 is also designed to resist side-channel attacks, which exploit the way that a computer processes data to find the original password. This is done by using a series of memory-hard functions that make it difficult to recover the original password from the hash.

=== TailwindCSS
TailwindCSS is a CSS framework that provides a set of utility classes that can be used to style HTML elements. It is designed to be used with a utility-first approach, meaning that it provides a set of classes that can be used to style elements without the need for custom CSS. This allows for a more modular approach to styling, as each element can be styled with a set of classes rather than a single class.
This allows for a more cohesive design, as the same classes can be used across the website to create a consistent look and feel.

Tailwind is also optimised to minimise the size of the CSS file that needs to be sent to the client by removing unused classes from the final build and minifying what is left. A smaller file size means faster load times for clients as there is less data to download from the server that hosts the website.



#pagebreak()
== Objectives

+ Allow users to access the website without an account.
+ Allow users of the website to have an account
+ Allow users to log in to their account to have their activity associated with them.
+ Let users browse available methods on the front page.
+ Let users create their own methods.
+ Allow users to edit and delete their methods.
+ Allow a user to like methods, thereby promoting them within the website.
+ Allow users to comment on methods.


