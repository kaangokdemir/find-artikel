export const convertGenderToArtikel = async (letter: string) => {
  switch (letter) {
    case 'm':
      return 'der'
    case 'n':
      return 'das'
    case 'f':
      return 'die'
    case 'p':
      return 'die'
    default:
      return undefined
  }
}
