// ----------------------------------------------------------------------

import { PATH_PAGE } from '../../routes/paths';

export const menuConfig = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Search Chef',
    path: PATH_PAGE.searchChef.root,
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
  },
  {
    title: 'Ingredients',
    path: '/ingredients',
  },
];

export const homeMenuConfig = [
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Available Cities',
    path: '/',
    target: 'choose_city_dialog',
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
  },
];
