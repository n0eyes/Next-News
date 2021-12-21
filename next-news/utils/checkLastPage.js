const MAXIMUM = {
  news: 10,
  newest: 12,
  ask: 2,
  show: 2,
  jobs: 1,
};
const checkLastPage = (category, currentPage) => {
  return currentPage >= MAXIMUM[category] ? true : false;
};

export default checkLastPage;
