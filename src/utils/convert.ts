export const convertHtmlToText = (html: string) => {
  if (typeof window !== 'undefined') {
    // Create a new div element
    const tempDivElement = document.createElement('div')

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html

    // Retrieve the text property of the element
    return (
      tempDivElement.textContent ||
      tempDivElement.innerText ||
      ''
    ).replace(/\n/g, '')
  }

  return html
}
