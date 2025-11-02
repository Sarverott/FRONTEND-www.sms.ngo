import { createRequire } from 'module'

const repoSourceLink =
  'https://raw.githubusercontent.com/SilesiaMakerSpace/.github/refs/heads/main/'

const require = createRequire(repoSourceLink)

const root = require('./locate/i18n.json')

const en = require(`${repoSourceLink}locate/EN/dictionary.json`)

const de = require(`${repoSourceLink}locate/DE/dictionary.json`)

const pl = require(`${repoSourceLink}locate/PL/dictionary.json`)

const es = require(`${repoSourceLink}locate/ES/dictionary.json`)

const ru = require(`${repoSourceLink}locate/RU/dictionary.json`)

const ua = require(`${repoSourceLink}locate/UA/dictionary.json`)

const ro = require(`${repoSourceLink}locate/RO/dictionary.json`)

import { createI18n } from 'vue-i18n'

const i18n = createI18n(
  Object.assign(root, {
    messages: {
      en,
      de,
      pl,
      es,
      ru,
      ua,
      ro,
    },
  }),
)

export default i18n
