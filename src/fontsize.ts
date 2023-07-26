const decReg = /[1-9]{1}[0-9]*/

const fontsize4unity2html = {
  pattern: /<size=([^>]*)>(.*?)<\/size>/,
  replace: (match: string, p1: string, p2: string) => {
    if (!p1.match(decReg))
      throw new Error(`error font size : ${match}`)

    return `<span style="font-size: ${p1}px">${p2}</span>`
  },
}

const fontsize4html2unity = {
  pattern: /<span style="font-size: *([^>"]*)px">(.*?(?!<span).*?)<\/span>/,
  replace: (match: string, p1: string, p2: string) => {
    if (!p1.match(decReg))
      throw new Error(`error font size : ${match}`)

    return `<size=${p1}>${p2}</size>`
  },
}

export const fontsizeconverter = {
  html2unity: fontsize4html2unity,
  unity2html: fontsize4unity2html,
}
