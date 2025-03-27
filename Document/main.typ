#import "analysis.typ"
#import "design.typ"
#import "solution.typ"

#set document(author: "Rae Noble", title: "Rae_Noble-NEA_Document")

#page(margin: 0pt)[
  #image("FrontPage.png", height: 100%)
  #place(horizon, text("by Rae Noble", size: 18pt, font: "Poppins", weight: "bold"), dy: 38pt, dx: 300pt)
]

#set text(
  font: "Montserrat",
  weight: "medium",
  size: 12pt
)

#show heading: set text(font: "Poppins")

#show heading.where(level: 1): it => [
  #pagebreak()
  #set align(center)
  #set text(fill: rgb("#ff9901"), size: 24pt)
  #emph(it)
  #v(16pt)
]

#show heading.where(level: 2): it => [
  #set text(size: 18pt)
  #emph(it)
  #v(8pt)
]

#show heading.where(level: 3): it => [
  #set text(size: 14pt)
  #emph(it)
]

#show heading.where(level: 4): it => [
  #set align(center)
  #emph(it)
]

#set page(
  footer: context [
    #set align(center)
    #counter(page).display("1")
  ],
  header: context [
    #set text(10pt)
    Rae Noble
    #h(1fr)
    *ChemWeb*
  ]
)



#counter(page).update(1)

#show outline.entry.where(level: 1): set block(above: 20pt)

#outline()
#analysis
#design
#solution