const { convertGenderToArtikel, getGender } = require('./utils')

const findArtikel = async (text) => {
  const gender = await getGender(text)
  const artikel = await convertGenderToArtikel(gender)
  return artikel
}

module.exports = { findArtikel }
