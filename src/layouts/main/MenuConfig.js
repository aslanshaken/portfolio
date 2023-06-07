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
  // {
  //   title: 'Available Cuisine',
  //   path: '/#',
  //   target: 'choose_city_dialog',
  // },
  {
    title: 'Become a Chef',
    path: '/contact-us',
  },
];
