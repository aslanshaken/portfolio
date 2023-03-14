import { Box, Typography, Container, Grid, Button } from '@mui/material';
import GradientText from 'src/components/GradientText';
import { styled } from '@mui/material/styles';
import Image from 'src/components/Image';
import FruitsTop from './fruits/FruitsTop';
import FruitsBottom from './fruits/FruitsBottom';

// -----------------------------------------------------
const ImageText = styled(Typography)((theme) => ({
  position: 'absolute',
  color: 'white',
  width: '100%',
  textAlign: 'center',
  fontWeight: 500,
}));

const ImageBox = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  maxHeight: 500,
  overflow: 'hidden',
  borderRadius: 8,
}));

const RockvilleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rockville',
  color: theme.palette.grey[300_50],
  pl: 5,
}));

//

const IMAGES = [
  {
    name: 'natural',
    label: '100% natural',
  },
  {
    name: 'quality',
    label: 'High quality',
  },
  {
    name: 'price',
    label: 'Fair prices',
  },
];

// -----------------------------------------------------
export default function AwesomeFood() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Container maxWidth="xl">
          <Box pt={10} sx={{ position: 'relative' }}>
            <RockvilleText
              variant="h1"
              sx={{
                fontSize: { md: '150px !important', xs: '100px !important' },
              }}
            >
              Features
            </RockvilleText>
            <GradientText color="secondary" variant="subtitle1" sx={{ position: 'absolute', bottom: '15px' }}>
              Welcome to HICKORY!
            </GradientText>
          </Box>
          <Typography variant="h2" mt={'-10px'} sx={{ fontSize: '50px !important', color: 'common.black' }}>
            Providing awesome food
          </Typography>
          <Typography
            variant="h6"
            sx={{ width: { md: '44%', xs: '100%' }, fontWeight: 500, fontSize: '17px !important' }}
            pt={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>

          <FruitsTop />
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ pt: 6 }}>
        <Grid container>
          {IMAGES.map((image, index) => (
            <Grid
              key={image.name}
              item
              md={4}
              xs={12}
              sx={{
                pr: { md: 3, xs: 0 },
                pt: {
                  xs: 3,
                  md: 5 * (IMAGES.length - index - 1),
                },
              }}
            >
              <ImageBox>
                <Image sx={{ width: '100%' }} src={`/assets/home/features/${image.name}.png`} alt={image.name} />
                <ImageText variant="h2">{image.label}</ImageText>
              </ImageBox>
            </Grid>
          ))}
        </Grid>

        {/* welcome section */}
        <Box pt={6} sx={{ position: 'relative' }}>
          <RockvilleText
            variant="h1"
            pl={3}
            sx={{
              fontSize: { md: '150px !important', xs: '100px !important' },
            }}
          >
            Welcome
          </RockvilleText>
          <GradientText color="secondary" variant="subtitle1" sx={{ position: 'absolute', bottom: '35px' }}>
            About us
          </GradientText>
        </Box>
        <Grid container mt={'-25px'}>
          <Grid item md={6} xs={12} sx={{ pr: 3 }}>
            <Typography
              variant="h2"
              sx={{ width: { md: '75%', xs: '100%' }, fontSize: '50px !important', color: 'common.black', mt: '-10px' }}
            >
              Good dishes for better future
            </Typography>

            <Typography
              variant="h6"
              sx={{ width: { md: '88%', xs: '100%' }, fontWeight: 500, fontSize: '17px !important', py: 3 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>

            <Button variant="contained" size="large" sx={{ px: 10, mt: 2 }}>
              MORE ABOUT US
            </Button>
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: { md: '-90px', xs: 3 } }}>
            <Image src="/assets/home/cooking.png" alt="cooking" sx={{ borderRadius: 1 }} />
          </Grid>
        </Grid>

        <FruitsBottom />
      </Container>
    </>
  );
}
