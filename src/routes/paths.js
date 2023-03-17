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
  menu: '/menu',
  contactUs: '/contact-us',
  ingredients: '/ingredients',
};
