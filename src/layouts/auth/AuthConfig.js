import { PATH_PAGE } from '../../routes/paths';

const authConfig = [
  // {
  //   title: 'About Us',
  //   path: '/about-us',
  // },
  // {
  //   title: 'Available Cities',
  //   path: '/#',
  //   target: 'choose_city_dialog',
  // },
  // {
  //   title: 'Contact Us',
  //   path: '/contact-us',
  // },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Search Chef',
    path: PATH_PAGE.searchChef.root,
  },
  {
    title: 'Contacts',
    path: '/contacts',
  },
  {
    title: 'Help',
    path: '/help',
  },
];

export default authConfig;
