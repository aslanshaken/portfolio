import { Box, Typography, Container, Grid, Button } from '@mui/material';
import GradientText from 'src/components/GradientText';
import { styled } from '@mui/material/styles';
import Image from 'src/components/Image';

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
}));

const RockvilleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rockville',
  color: theme.palette.grey[300_50],

  pl: 5,
}));

const imgPosition = {
  positionTomato: { position: 'absolute', top: { md: '60px', xs: '60px' }, right: '20%' },
  positionPepper: { position: 'absolute', top: { md: '120px', xs: '70px' }, right: '9%' },
  positionCucumber: { position: 'absolute', top: { md: '250px', xs: '170px' }, right: '9%' },
  positionGarlic: { position: 'absolute', top: { md: '240px', xs: '160px' }, right: '0%' },
};

const Styles = {
  imgTomato: {
    height: {
      md: '130px',
      xs: '60px',
    },
    width: {
      md: '130px',
      xs: '60px',
    },
  },
  imgPepper: {
    height: {
      md: '100px',
      xs: '60px',
    },
    width: {
      md: '100px',
      xs: '60px',
    },
  },
  imgCucumber: { height: { md: '90px', xs: '65px' }, width: { md: '80px', xs: '50px' } },
  imgGalic: { height: { md: '54px', xs: '30px' }, width: { md: '42px', xs: '30px' } },
  imgVGalic: { mt: { md: '85px', xs: '30px' }, height: { md: '54px', xs: '30px' }, width: { md: '42px', xs: '30px' } },
  imgVPapper: { mt: { md: 0, xs: '10px' }, height: { md: '100px', xs: '50px' }, width: { md: '100px', xs: '50px' } },
  imgVtomato: { mt: { md: '-20px', xs: 0 }, height: { md: '160px', xs: '60px' }, width: { md: '160px', xs: '60px' } }
};
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
          <Box sx={imgPosition.positionTomato}>
            <Image src="/assets/home/vegetable/toma.png" alt="cucumber" sx={Styles.imgTomato} />
          </Box>
          <Box sx={imgPosition.positionPepper}>
            <Image src="/assets/home/vegetable/pepper.png" alt="cucumber" sx={Styles.imgPepper} />
          </Box>
          <Box sx={imgPosition.positionCucumber}>
            <Image src="/assets/home/vegetable/cucumber.png" alt="cucumber" sx={Styles.imgCucumber} />
          </Box>
          <Box sx={imgPosition.positionGarlic}>
            <Image src="/assets/home/vegetable/garlic.png" alt="cucumber" sx={Styles.imgGalic} />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ pt: 6 }}>
        <Grid container>
          <Grid item md={4} xs={12} sx={{ pr: { md: 3, xs: 0 }, pt: '10%' }}>
            <ImageBox>
              <Image sx={{ width: '100%' }} src="/assets/home/features/natural.png" alt="natural" />
              <ImageText variant="h2">100% natural</ImageText>
            </ImageBox>
          </Grid>
          <Grid item md={4} xs={12} sx={{ px: { md: 1.5, xs: 0 }, pt: '5%' }}>
            <ImageBox>
              <Image sx={{ width: '100%' }} src="/assets/home/features/quality.png" alt="quality" />
              <ImageText variant="h2">High quality</ImageText>
            </ImageBox>
          </Grid>
          <Grid item md={4} xs={12} sx={{ pl: { md: 3, xs: 0 }, pt: { md: 0, xs: 3 } }}>
            <ImageBox>
              <Image sx={{ width: '100%' }} src="/assets/home/features/price.png" alt="price" />
              <ImageText variant="h2">Fair prices</ImageText>
            </ImageBox>
          </Grid>
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
              mt={'-10px'}
              sx={{ width: { md: '75%', xs: '100%' }, fontSize: '50px !important', color: 'common.black' }}
            >
              Good dishes for better future
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: { md: '88%', xs: '100%' }, fontWeight: 500, fontSize: '17px !important' }}
              py={3}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
            <Button variant="contained" size="large" mt={15} sx={{ px: 10 }}>
              More about us
            </Button>
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: { md: '-90px', xs: 3 } }}>
            <Image src="/assets/home/cooking.png" alt="cooking" />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { md: 20, xs: 5 } }}>
          <Image src="/assets/home/bottom_vegetable/garlic.png" alt="garlic" sx={Styles.imgVGalic} />
          <Image
            src="/assets/home/bottom_vegetable/pepper.png"
            alt="garlic"
            sx={Styles.imgVPapper}
          />
          <Image
            src="/assets/home/bottom_vegetable/toma.png"
            alt="toma"
            sx={Styles.imgVtomato}
          />
        </Box>
      </Container>
    </>
  );
}
