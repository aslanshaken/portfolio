import { Backdrop, Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'src/components/Image';
import MyAvatar from 'src/components/MyAvatar';

// --------------------------------------------------------

const review = {
  username: 'Aslan S.',
  job: 'CEO, Founder',
  avatar: 'AslanS',
  sign: 'AslanSSign',
  title:
    'Vivamus suscipit tortor eget felis porttitor volutpat suscipit tortor eget felis porttitor volutpat mauris blandit aliquet elit.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta proin eget tortor risus droin tortor risus.',
};

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  background: 'white',
  padding: theme.spacing(1),
  '& .overlay': {
    position: 'absolute',
    background: 'url(/assets/home/benefit_bg.png)',
    visibility: 'visible !important',
    opacity: 'unset !important',
  },
}));

const RockvilleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rockville',
  color: theme.palette.grey[300_50],
  pl: 5,
}));

const STYLES = {
  reviewDescription: {
    color: 'text.secondary',
    fontSize: '18px',
    fontWeight: 100,
    lineHeight: '2rem',
    maxWidth: '625px',
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  },
  qualityLittle: {
    color: 'common.black',
    mt: '-3rem',
    maxWidth: 400,
    mb: 3,
  },
};

// --------------------------------------------------------

export default function Benefit() {
  return (
    <RootStyle>
      <Backdrop open={true} className="overlay" />      
      <Container maxWidth="lg">
        <Grid container spacing={20}>
          <Grid item md={5} xs={12}>
            <RockvilleText
              pt={5}
              variant="h1"
              sx={{
                fontSize: { md: '150px !important', xs: '100px !important' },
              }}
            >
              Benefits
            </RockvilleText>
            <Typography variant="h2" sx={STYLES['qualityLittle']}>
              We always care about quality
            </Typography>
          </Grid>
          <Grid item md={7} xs={12} pt={{ md: '160px !important', xs: '0px !important' }}>
            <Typography variant="h5" pt={10} fontWeight={500} maxWidth={'710px'}>
              {review.title}
            </Typography>
            <Typography py={3} variant="h5" sx={STYLES['reviewDescription']}>
              {review.description}
            </Typography>
            <Grid container>
              <Grid item md={5} xs={6}>
                <Box sx={STYLES['avatarSection']} pl={1}>
                  <MyAvatar
                    src={`/assets/home/review/${review.avatar}.png`}
                    alt="avatar"
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box pl={2}>
                    <Typography variant="h5" fontWeight={500}>
                      {review.username}
                    </Typography>
                    <Typography variant="h6" fontWeight={500} sx={{ color: 'primary.light' }}>
                      {review.job}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={7} xs={6}>
                <Image src={`/assets/home/review/${review.sign}.png`} alt="sign" sx={{ maxWidth: '170px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
