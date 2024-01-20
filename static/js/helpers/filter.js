export function filterDataByQuery(data, query) {
  const filteredData = data.filter(item => {
    if(Object.values(item)
    .toString()
    .toLowerCase()
    .includes(query.toLowerCase())) return true;
  });
  return filteredData;
}