#import "analysis.typ"
#import "design.typ"
#import "solution.typ"
#import "testing.typ"
#import "evaluation.typ"

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

#show heading: set text(font: "Poppins", weight: "bold")
#show heading: set heading(supplement: [document], numbering: "1.1:")

#show heading.where(level: 1): it => [
  #set align(center)
  #set text(fill: rgb("#ff6300"), size: 24pt)
  #emph(it)
  #v(16pt)
]

#show heading.where(level: 2): it => [
  #set text(size: 18pt)
  #emph(it)
  #v(8pt)
]

#show heading.where(level: 3): it => [
  #set text(size: 16pt)
  #emph(it)
]

#show heading.where(level: 4): it => [
  #set text(size: 14pt)
  #emph(it)
]

#show heading.where(level: 5): it => [
  #set align(center)
  #text(it, fill: rgb("ff6366"))
]

#set page(
  footer: context [
    #counter(page).display("1 / 1", both: true)
    #h(1fr)
    #set text(10pt)
    *Centre Number:* 15162
    *Component Code:* 7517/C
  ],
  header: context [
    #set text(10pt)
    Rae Noble
    *Candidate Number:* 3254
    #h(1fr)
    ChemWeb
  ]
)

#counter(page).update(1)

#show outline.entry.where(level: 1): set block(above: 20pt)

#outline(
  target: heading.where(level: 1)
  .or(heading.where(level: 2))
  .or(heading.where(level: 3))
  .or(heading.where(level: 4))
  .and(heading.where(supplement: [document]))
)

#analysis
#design
#solution
#testing
#evaluation