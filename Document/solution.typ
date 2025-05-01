#import "@preview/codly:1.2.0": *
#import "@preview/codly-languages:0.1.8": *
#show: codly-init.with()
#codly(languages: codly-languages)

#let file(filepath) = {
  filepath = "../"+filepath
  let file = read(filepath)
  filepath = filepath.split("/")
  let depth = filepath.len()
  let filename = filepath.at(-1)
  let filetype = filename.split(".").at(-1)

  heading("/"+filename, level: depth+1, supplement: [code])
  set align(center)
  raw(file, lang: filetype, block: true)
}

#pagebreak()
= Technical Solution

#show outline: set heading(supplement: [code], level: 2)

#outline(
  target: heading.where(supplement: [code]),
  title: "Code Outline"
)

#v(20pt)

The Technical solution contains most of the code used in the ChemWeb website, excluding extraneous files such as any `.svg` images and automatically generated files such as the `package.json` file. The code is arranged in a way that mirrors the directories in the project.

#v(20pt)

#show heading: set heading(supplement: [code])

#heading([Code], level: 2, supplement: [document])

#heading([/src], level: 3)

#file("src/app.html")
#file("src/app.d.ts")
#file("src/app.css")
#file("src/error.html")


#heading([/routes], level: 4)

Every folder in the `/routes` directory corresponds 1 to 1 with a route on the website.
Their functionality depends on the files present in that directory as explained in the svelte section.

#file("src/routes/+page.svelte")
#file("src/routes/+page.server.ts")
#file("src/routes/+error.svelte")
#file("src/routes/+layout.svelte")
#file("src/routes/+layout.server.ts")


#heading([/api], level: 5)
#heading([/verify], level: 6)

This route contains the server-side functionality for verifying JWTs that confirm that a user is logged in. There is no corresponding page for this route as it is only used to verify the JWTs. 

#file("src/routes/api/verify/+server.ts")

#heading([/contact-us], level: 5)
#file("src/routes/contact-us/+page.svelte")

#heading([/login], level: 5)

The login page is the page that the user will be taken to when they click the login button on the navbar. It contains a form that allows the user to enter their username and password in order to log in. If the user does not have an account, they can click the register button to be taken to the register page.

#file("src/routes/login/+page.server.ts")
#file("src/routes/login/+page.svelte")

#heading([/logout], level: 5)

The logout route contains the functionality for logging out the user by deleting the JWT cookie used to verify that there is a valid logged in user. 

#file("src/routes/logout/+page.server.ts")

#heading([/method:[methodID=id]], level: 5)
#file("src/routes/method:[methodID=id]/+page.server.ts")
#file("src/routes/method:[methodID=id]/+page.svelte")
#file("src/routes/method:[methodID=id]/+server.ts")

#heading([/register], level: 5)
The register page is the page that the user will be taken to when they click the register button on the navbar. It contains a form that allows the user to enter their username and password in order to create a new account. If they already have an account, they can click the login button to be taken to the login page.

#file("src/routes/register/+page.server.ts")
#file("src/routes/register/+page.svelte")

#heading([/(authorised)], level: 5)

Everything in the `/(authorised)` route requires the user to be logged in first in order to access them.

#file("src/routes/(authorised)/+layout.server.ts")

#heading([/new-method], level: 6)
#file("src/routes/(authorised)/new-method/+page.server.ts")
#file("src/routes/(authorised)/new-method/+page.svelte")

// #heading([/settings], level: 6)
// #file("src/routes/(authorised)/settings/+page.server.ts")
// #file("src/routes/(authorised)/settings/+page.svelte")

#heading([/lib], level: 4)

#file("src/lib/b64.ts")
#file("src/lib/database.ts")
#file("src/lib/types.d.ts")

#heading([/components], level: 5)

#file("src/lib/components/Carousel.svelte")
#file("src/lib/components/DropdownSelect.svelte")
#file("src/lib/components/Footer.svelte")
#file("src/lib/components/LayoutBar.svelte")
#file("src/lib/components/LayoutSearchBar.svelte")
#file("src/lib/components/MethodBox.svelte")
#file("src/lib/components/ProfileMenu.svelte")
#file("src/lib/components/SearchBarGeneric.svelte")
#file("src/lib/components/StepForm.svelte")

#heading([/params], level: 4)

#file("src/params/id.ts")


#heading([/prisma], level: 3)

The `schema.prisma` file contains the models for the database schema.

#file("prisma/schema.prisma")


