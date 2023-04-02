// hooks
import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();

  return (
    <Avatar
      src={user?.photoURL}
      alt={user?.first_name}
      color={user?.photoURL ? 'default' : createAvatar(user?.first_name).color}
      {...other}
    >
      {createAvatar(user?.first_name).name}
      {createAvatar(user?.last_name).name}
    </Avatar>
  );
}
