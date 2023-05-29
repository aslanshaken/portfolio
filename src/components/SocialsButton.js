import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Link, Stack, Button, Tooltip, IconButton } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

SocialsButton.propTypes = {
  initialColor: PropTypes.bool,
  links: PropTypes.objectOf(PropTypes.string),
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function SocialsButton({ initialColor = false, simple = true, links = {}, sx, ...other }) {
  const SOCIALS = [
    // {
    //   name: 'Twitter',
    //   icon: 'eva:twitter-outline',
    //   socialColor: '#00AAEC',
    //   path: links.twitter || '#twitter-link',
    // },
    {
      name: 'Instagram',
      icon: 'ant-design:instagram-outline',
      socialColor: '#E02D69',
      path: links.instagram || '#instagram-link',
    },
    {
      name: 'FaceBook',
      icon: 'eva:facebook-fill',
      socialColor: '#1877F2',
      path: links.facebook || '#facebook-link',
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={3}
      flexWrap="wrap"
      alignItems="center"
      justifyContent={'space-between'}
      maxWidth={200}
      m={{ xs: 'auto', sm: 0 }}
    >
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path} target='_blank'>
            <Tooltip title={name} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  ...(initialColor && {
                    color: socialColor,
                    '&:hover': {
                      bgcolor: alpha(socialColor, 0.08),
                    },
                  }),
                  border: 'solid 1px white',
                  ...sx,
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{ width: 25, height: 25, color: 'common.white' }} />
              </IconButton>
            </Tooltip>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
