const getTranslation = (value, language, translations) => {
  if (!translations.hasOwnProperty(language)) {
    translations[language] = {}
  }
  const translationIndex = Object.keys(translations[language]).find(x => translations[language][x] === value)

  const hasTranslation = translationIndex !== undefined
  const nextKey = Object.keys(translations[language]).length

  if (hasTranslation) {
    return parseInt(translationIndex)
  }

  translations[language][nextKey] = value

  return nextKey;
}

const replaceNodeValueWithTranslation = (elements, language, translations) => {
  return elements.map(e => {
    const isContainer = e.hasOwnProperty('children')

    e.value = getTranslation(e.value, language, translations)

    if (isContainer) {
      e.children = replaceNodeValueWithTranslation(e.children, language, translations)
    }

    return e
  })
}

export default (elements, language) => {
  const translations = {}

  return {
    elements: replaceNodeValueWithTranslation(elements, language, translations),
    translations: translations
  }
}

