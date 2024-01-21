export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurent) => {
    return restaurent?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filteredData;
}
