import { convertGenderToArtikel, getGender } from './utils'
import { getVersion, helpText } from './helpers'

export const findArtikel = async (text: string) => {
  const gender = await getGender(text)
  const artikel = await convertGenderToArtikel(gender)
  return artikel
}

export { convertGenderToArtikel, getGender, getVersion, helpText }
