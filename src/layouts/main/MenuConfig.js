// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Menu',
    path: '/menu',
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

export default menuConfig;
