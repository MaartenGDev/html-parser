const getTranslation = (value, language, translations) => {
  if (!translations.hasOwnProperty(language)) {
    translations[language] = {}
  }
  const translationIndex = Object.keys(translations[language]).find(x => translations[language][x] === value)

  const hasTranslation = translationIndex !== undefined
  const nextKey = Object.keys(translations[language]).length

  if (hasTranslation) {
    return {translationId: parseInt(translationIndex), translations: translations}
  }

  translations[language][nextKey] = value

  return {translationId: nextKey, translations: translations}
}

const replaceNodeValueWithTranslation = (elements, language, translations) => {
  debugger;

  return elements.map(e => {
    const isContainer = e.hasOwnProperty('children')

    const {translationId} = getTranslation(e.value, language, translations)

    e.value = translationId

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

