// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';

import useAuth from 'src/hooks/useAuth';
// ----------------------------------------------------------------------

const navConfig = () => { 
  const { user }  = useAuth();
  const orderTitle = user && user?.user?.role === 'EndUser' ? 'Your Orders' : 'Customer Orders'

  var config = [
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
          title: orderTitle ,
          path: PATH_DASHBOARD.orders,
          icon: <Iconify icon={'fluent-mdl2:activate-orders'} />,
        }
      ],
    },
  ]
  if(user && user?.user?.role === 'Chef'){
    config[0].items?.push(
      {
        title: 'Foods',
        path: PATH_DASHBOARD.wishlist,
        icon: <Iconify icon={'emojione-monotone:pot-of-food'} />,
      },
      {
        title: 'Available dates',
        path: PATH_DASHBOARD.availableDates,
        icon: <Iconify icon={'mdi:calendar'} />,
      }
    )
  }
return config;
};

export default navConfig;
