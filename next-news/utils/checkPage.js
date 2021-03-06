const MAXIMUM = {
  news: 10,
  newest: 10,
  ask: 2,
  show: 2,
  jobs: 1,
};

export const checkFirstPage = (currentPage) => currentPage === 1;

export const checkLastPage = (category = "news", currentPage) => {
  return currentPage >= MAXIMUM[category] ? true : false;
};
