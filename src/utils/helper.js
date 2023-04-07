export const filterData = (searchText, restaurants) => {
  return restaurants.filter((item) =>
    item?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
};
