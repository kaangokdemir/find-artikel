import axios from 'axios'
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

const { BASE_URI, API_KEY } = process.env

export const getGender = async (word: string) => {
  let RES
  try {
    const fullURL = `${BASE_URI}/lookup?key=${API_KEY}&lang=de-en&text=${word}`

    RES = await axios(fullURL)
  } catch (error) {
    throw new Error(error)
  }

  if (!RES.data.def.length) {
    throw new Error(`Definition not found for word "${word}"`)
  }

  return RES.data.def[0].gen
}
