// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

const fontFileNames = () => {
  const array = fs
    .readdirSync("src/res/fonts")
    .filter((file) => file.endsWith(".ttf"))
    .map((file) => {
      return file.replace(".ttf", "")
    })
  return Array.from(new Set(array))
}

const generateFontNames = () => {
  const properties = fontFileNames()
    .map((name) => {
      const key = String(name).replace(/\s|-/g, "")
      return `${key.charAt(0).toLowerCase() + key.slice(1)}: "${name}"`
    })
    .join(",\n  ")

  const content = `const fonts = {
  ${properties}
}

export default fonts`

  fs.writeFileSync("src/res/fonts/index.ts", content, "utf8")
}

generateFontNames()
