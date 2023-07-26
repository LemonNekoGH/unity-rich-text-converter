const bold4unity2html = {
  pattern: /<b>(.*?)<\/b>/,
  replace: (match: string, p1: string) => {
    return `<strong>${p1}</strong>`
  },
}

const bold4html2unity = {
  pattern: /<strong>(.*?)<\/strong>/,
  replace: (match: string, p1: string) => {
    return `<b>${p1}</b>`
  },
}

export const boldconverter = {
  html2unity: bold4html2unity,
  unity2html: bold4unity2html,
}
