#!/usr/bin/env node
'use strict'

import { convertGenderToArtikel, getGender, helpText, getVersion } from '../src'

const main = async () => {
  try {
    const args = process.argv.slice(2)

    args.forEach((arg) => {
      if (['-h', '--h'].includes(arg)) {
        helpText()
        process.exit(0)
      }

      if (['-v', '--v'].includes(arg)) {
        getVersion()
        process.exit(0)
      }
    })

    const textQuery = args[0]

    if (!textQuery) {
      return helpText()
    }

    const gender = await getGender(textQuery)
    const artikel = await convertGenderToArtikel(gender)
    console.log(artikel)
    return artikel
  } catch (error) {
    console.log(error)
  }
}

main()
