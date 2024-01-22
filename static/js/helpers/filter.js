export {filterDataByKeyword, filterDataByDay, filterDataByCategory}

function filterDataByKeyword(data, query) {
  const filteredData = data.filter(item => {
    return Object.values(item)
    .toString()
    .toLowerCase()
    .includes(query.toLowerCase());
  });
  return filteredData;
}

function filterDataByDay(data, day) {
  const filteredData = data.filter(item => {
    return item.day === day;
  });
  return filteredData;
}

function filterDataByCategory(data, category) {
  const filteredData = data.filter(item => {
    return item.category === category;
  });
  return filteredData;
}