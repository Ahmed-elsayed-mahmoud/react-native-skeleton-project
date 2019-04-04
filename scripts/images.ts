// tslint:disable-next-line: no-var-keyword
var fs = require("fs")

const imageFileNames = () => {
  const array = fs
    .readdirSync("src/res/images")
    .filter((file) => {
      return file.endsWith(".png")
    })
    .map((file) => {
      return file
        .replace(".png", "")
        .replace("@2x.png", "")
        .replace("@3x.png", "")
    })
  return Array.from(new Set(array))
}

// tslint:disable-next-line: no-var-keyword
var generate = () => {
  const properties = imageFileNames()
    .map((name) => {
      return `${name}: require('./${name}.png')`
    })
    .join(",\n  ")

  const content = `const images = {
  ${properties}
}
export default images`

  fs.writeFileSync("src/res/images/index.js", content, "utf8")
}

generate()