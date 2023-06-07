// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const navConfig = [
  // APP
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      {
        title: 'Personal Account',
        path: PATH_DASHBOARD.account,
        icon: <Iconify icon={'ph:user-circle-light'} sx={{ width: 28, height: 28 }} />,
      },
      {
        title: 'Payments',
        path: PATH_DASHBOARD.payments,
        icon: <Iconify icon={'fluent-mdl2:payment-card'} />,
      },
      {
        title: 'Orders',
        path: PATH_DASHBOARD.orders,
        icon: <Iconify icon={'fluent-mdl2:activate-orders'} />,
      },
      {
        title: 'Foods',
        path: PATH_DASHBOARD.wishlist,
        icon: <Iconify icon={'emojione-monotone:pot-of-food'} />,
      },
      {
        title: 'Available dates',
        path: PATH_DASHBOARD.availableDates,
        icon: <Iconify icon={'mdi:calendar'} />,
      },
    ],
  },
];

export default navConfig;
