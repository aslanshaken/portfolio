import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import BackgroundImage from '../../assets/03.png';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 100,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '1px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Resume = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      <ImageButton focusRipple key={'Resume'} style={{ width: '100%' }}>
        <ImageSrc style={{ backgroundImage: `url(${BackgroundImage})` }} />
        <ImageBackdrop className='MuiImageBackdrop-root' />
        <Link
          textDecoration='none'
          color='inherit'
          href='https://docs.google.com/document/d/1B0Swf8i7WrKl3D43qJY1SpaNKFJzrQqF/edit?usp=sharing&ouid=105436288719072033535&rtpof=true&sd=true'
          target='_blank'
        >
          <Image>
            <Typography
              component='span'
              variant='subtitle1'
              color='inherit'
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 3px)`,
              }}
            >
              <h4 style={{ margin: 0 }}>Resume</h4>
              <ImageMarked className='MuiImageMarked-root' />
            </Typography>
          </Image>
        </Link>
      </ImageButton>
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Resume;
