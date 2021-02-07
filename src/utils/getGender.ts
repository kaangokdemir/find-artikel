import axios from 'axios'

const BASE_URI = 'https://dictionary.yandex.net/api/v1/dicservice.json'
const API_KEY =
  'dict.1.1.20210203T215939Z.2821615ab5902e4c.a85334d1d0b70dba519445e6b36f1198d0d7e811'

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
