// tslint:disable-next-line: no-var-keyword
var fs = require("fs")

const fontFileNames = () => {
  const array = fs.readdirSync("src/res/fonts").map((file) => {
    return file.replace(".ttf", "")
  })
  return Array.from(new Set(array))
}

// tslint:disable-next-line: no-var-keyword
var generate = () => {
  const properties = fontFileNames()
    .map((name) => {
      const key = String(name).replace(/\s|-/g, "")
      return `${key.charAt(0).toLowerCase() + key.slice(1)}: '${name}'`
    })
    .join(",\n  ")

  const content = `const fonts = {
  ${properties}
}
export default fonts`

  fs.writeFileSync("src/res/fonts/index.ts", content, "utf8")
}

generate()
