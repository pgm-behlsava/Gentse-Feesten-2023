export {transformCategoryStringForID}

function transformCategoryStringForID(string) {
  string = string
  .toLowerCase()
  .replaceAll(' ', '-')
  .replaceAll('ë', 'e')
  .replaceAll('>', '-')
  .replaceAll('/', '-')
  .replaceAll(',', '-')
  .replaceAll("'", ' ')
  .replaceAll(' ', '');

  const regex = new RegExp('[-]{2,}', 'g');
  return string = string.replaceAll(regex, '-');
}