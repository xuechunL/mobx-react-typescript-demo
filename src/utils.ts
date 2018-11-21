export function	uuid() {
  // tslint:disable-next-line:one-variable-per-declaration
  let i: number, random: number
  let nUuid = ''

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      nUuid += '-'
    }
    nUuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16)
  }

  return nUuid
}

export function pluralize(count: number, word: string) {
  return count === 1 ? word : `${word}s`
}
