const repoSourceLink =
  'https://raw.githubusercontent.com/SilesiaMakerSpace/.github/refs/heads/main/'

const { default: root } = await import(`${repoSourceLink}locate/i18n.json`, {
  with: { type: 'json' },
})

const { default: en } = await import(`${repoSourceLink}locate/EN/dictionary.json`, {
  with: { type: 'json' },
})
const { default: de } = await import(`${repoSourceLink}locate/DE/dictionary.json`, {
  with: { type: 'json' },
})
const { default: pl } = await import(`${repoSourceLink}locate/PL/dictionary.json`, {
  with: { type: 'json' },
})
const { default: es } = await import(`${repoSourceLink}locate/ES/dictionary.json`, {
  with: { type: 'json' },
})
const { default: ru } = await import(`${repoSourceLink}locate/RU/dictionary.json`, {
  with: { type: 'json' },
})
const { default: ua } = await import(`${repoSourceLink}locate/UA/dictionary.json`, {
  with: { type: 'json' },
})
const { default: ro } = await import(`${repoSourceLink}locate/RO/dictionary.json`, {
  with: { type: 'json' },
})

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
