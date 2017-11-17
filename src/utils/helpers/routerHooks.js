export const setPageTitle = (to, from, next) => {
  if (to.meta.title === undefined) {
    document.title = 'Home';
  } else {
    document.title = to.meta.title;
  }
  next();
};
