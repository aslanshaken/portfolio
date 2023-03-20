// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  forgot: path(ROOTS_AUTH, '/forgot-pass'),
};

export const PATH_PAGE = {
  home: '/',
  aboutUs: '/about-us',
  searchChef: {
    root: '/search-chef',
    cities: ({ city, cuisine, chef } = '') =>
      path(
        '/search-chef',
        `/cities${city ? '/' + city : ''}${cuisine ? '/' + cuisine : ''}${chef ? '/' + chef : ''}`
      ),
  },
  contactUs: '/contact-us',
  ingredients: '/ingredients',
};
