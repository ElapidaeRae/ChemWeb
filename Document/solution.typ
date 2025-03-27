#import "@preview/codly:1.2.0": *
#import "@preview/codly-languages:0.1.8": *
#show: codly-init.with()
#codly(languages: codly-languages)

#let file(filepath) = {
  let filename = filepath.split("/").at(-1)
  let filetype = filename.split(".").at(-1)
  let file = read(filepath)
  heading("/"+filename, level: 4, supplement: [code])
  raw(file, lang: filetype, block: true)
}

= Techical Solution

#outline(
  title: "Files",
  target: heading.where(supplement: [code])
)
