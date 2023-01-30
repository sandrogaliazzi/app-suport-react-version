export function sortMessagesByCategory(messages) {
  return messages.sort((a, b) => a.category.id - b.category.id);
}

export function reduceCategoryLength(messages) {
  const categories = []

  messages.reduce((categoriesLength, message) => {
    const { category } = message;

    if (!categories.find(c => category.id === c)) {
      categories.push(category.id)
      categoriesLength = categories.length
    }

    return categoriesLength
  })

  return categories.length
}

export function filterByCategory(messages, index) {
  return messages.filter(message => message.category.id === index)
}

export function sliceIntoSections(messages) {
  const sections = []

  for (let i = 1; i <= reduceCategoryLength(messages); i++) {
    const section = filterByCategory(messages, i)


    sections.push({
      name: section[0].category.name,
      messages: [...section]
    })
  }

  return sections
}