// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

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
    root: '/cities',
    cities: ({ city, cuisine, chef } = '') =>
      path('/cities', `${city ? '/' + city : ''}${cuisine ? '/' + cuisine : ''}${chef ? '/' + chef : ''}`),
  },
  contactUs: '/contact-us',
  ingredients: '/ingredients',
  cart: '/cart',
};

export const PATH_DASHBOARD = {
  root: path(ROOTS_DASHBOARD, ''),
  account: path(ROOTS_DASHBOARD, '/account'),
  payments: path(ROOTS_DASHBOARD, '/payments'),
  orders: path(ROOTS_DASHBOARD, '/orders'),
  wishlist: path(ROOTS_DASHBOARD, '/wishlist'),
};
