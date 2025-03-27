= Analysis

== Description
A website that can keep track of the ingredients and processes needed for a reaction, as written by a user of the platform.

Like Thingiverse for chemistry, allowing users to save and share methods for various reactions and syntheses. A community of users would allow methods to be improved over time with constant iteration.

No similar website seems to exist. ChemWeb provides a novel solution to a hitherto untouched problem, creating a central repository for methods to create chemicals.

== Technologies
It will be made using Svelte, a UI framework that allows for highly modular and reactive websites through the use of components. When used in combination with SvelteKit, the companion web framework, it can be made into a full stack web application.

SvelteKit works similarly to other web frameworks like Angular, Django or Flask by providing a templating engine that complements Svelte components and allowing for separate server-side and client-side processing.

As this project will be using Svelte, most of it will be written in TypeScript and HTML.

I will make use of TailwindCSS for styling as I have prior experience with using it and know that its use is effective in creating visually cohesive UIs.

Using an ORM will allow for the effective organisation of the large amount of data going to and from a database. Due to this, I have elected to use Prisma ORM as it allows me to define my models and interface with the database with a reduced fear of user error due to the objects limiting the shape of records in the database.


=== Svelte
Svelte uses a system of ‘components’ to modularise websites made with it. Each component can be infinitely reused anywhere in the website. In this they are akin to classes in that one template is defined and it can then be referred to in order to create an instance of that component. 

A component is a file ending in `.svelte`. These files are self-contained blocks of HTML and TypeScript that can be used anywhere they are imported, as can be seen with the `MethodBox.svelte` component or the `LayoutBar.svelte`. 

Each component can have their own script tag and HTML with extra syntax added by Svelte that allows a developer to access features such as stores or add if-else statements or each statements to the HTML. 

#v(16pt)

SvelteKit uses a file-based routing system. This means that the way the files and directories are arranged will reflect the routes for the website. Any files in the `test` folder will be associated with the `/test` route on the website. 

A file named `+page.svelte` in that directory will be treated as the web page’s main file, the template to be rendered. 

The `+page.server.ts` files are exclusively run on the server, meaning they can access private variables such as those in the `.env` file. As it starts with `+page`, values in this file can be passed into the page.

`+layout` files apply to every page below them in the file hierarchy. If they contain rendered HTML, they will include a `<slot>` tag for the rest of the page to render in.


=== PrismaORM
PrismaORM is an Object Relational Mapper that allows a programmer to define models that can translate the data in an object into a format suitable for a relational database. 

It serves as an abstraction layer between the database and the functional code in the pages of the website.

=== JSON Web Token (JWT)

JWT is a standard for exchanging information securely with encrypted tokens that resolve to javascript.

The key to encrypt and decrypt the tokens is stored in the `.env` file on the server. The JWT payload contains a series of ‘claims’ such as the issuer of the JWT (`iss`), the subject (`sub`) or the token’s expiration date (`exp`). These claims are then run through an algorithm such as SHA-256 to create the payload portion of the JWT. This is then concatenated with the header and signature separated by ‘.’ to make the final token.

=== Argon2
Argon2 is a hashing library that provides functions for hashing data and comparing data to a hash. In this project it will be used for the login system. As storing user passwords as plaintext is inadvisable, they will be stored as a hash to provide a basic level of security, this hash will then be compared to the hash of an inputted password to check its validity. 

#pagebreak()
== Objectives

+ Allow users of the website to have a user account

+ Users will be able to manage their account through the ChemWeb website.
+ Let users browse available methods on the front page 
+ Let users search for methods.
+ Let users make their own methods.
+ Allow a user to like methods, thereby promoting them within the website
+ Allow users to support the website financially through donations. 
+ Enable user profiles to display cosmetic badges
