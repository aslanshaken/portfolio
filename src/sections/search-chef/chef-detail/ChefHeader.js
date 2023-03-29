import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, IconButton, Typography, Hidden, Link, Breadcrumbs, styled } from '@mui/material';
import Container from '../../../components/Container';
import { useRouter } from 'next/router';
import Iconify from '../../../components/Iconify';
import GradientText from '../../../components/GradientText';
import ReadMore from '../../../components/ReadMore';
import { HEADER } from 'src/config';
import Image from 'src/components/Image';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const categories = [
  {
    id: '1',
    label: 'Frozen Meals',
  },
  {
    id: '2',
    label: 'Cakes',
  },
  {
    id: '3',
    label: 'Vegeterian',
  },
  {
    id: '4',
    label: 'Halal',
  },
  {
    id: '5',
    label: 'Catering',
  },
  {
    id: '6',
    label: 'Popular',
  },
  {
    id: '7',
    label: 'Delivery today',
  },
];

ChefHeader.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function ChefHeader({ selectedCategory, setSelectedCategory }) {
  const router = useRouter();
  const { chef } = router.query;

  return (
    <RootStyle>
      <Container>
        <Breadcrumbs separator="->" sx={{ fontWeight: 600, py: 2 }}>
          <Link color="inherit" href="#">
            Austin
          </Link>
          <Link color="inherit" href="#">
            Central Asia cuisine
          </Link>
          <Typography fontWeight={600}>Michael</Typography>
        </Breadcrumbs>
        <Box display={'flex'} p={2} mb={4}>
          <Box px={2} width={'100%'}>
            <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'}>
              <Box display={'flex'} gap={2}>
                <Box position={'relative'}>
                  <Avatar
                    alt="Travis Howard"
                    src={`/assets/search-chef/chefs/${chef}.png`}
                    sx={{
                      width: {
                        md: 150,
                        xs: 100,
                      },
                      height: {
                        md: 150,
                        xs: 100,
                      },
                    }}
                  />
                  <Iconify
                    icon={'material-symbols:verified'}
                    sx={{
                      position: 'absolute',
                      top: { xs: 2, md: 8 },
                      right: { xs: 2, md: 8 },
                      width: { xs: 20, md: 24 },
                      height: { xs: 20, md: 24 },
                      color: '#0ED3CF',
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    color={'black'}
                    sx={(theme) => ({
                      ...theme.typography.h5,
                      [theme.breakpoints.up('md')]: {
                        ...theme.typography.h3,
                      },
                    })}
                  >
                    Sheff's Michael menu
                  </Typography>
                  <Box display={'flex'} gap={2} flexWrap={'wrap'} py={1}>
                    <Typography color={'black'} variant={'subtitle1'}>
                      Japan Cuisine
                    </Typography>
                    <Typography color={'black'} variant={'subtitle1'}>
                      Rating: 5
                    </Typography>
                    <Typography color={'black'} variant={'subtitle1'}>
                      Deliveries: 28
                    </Typography>
                    <GradientText color={'primary'} variant={'subtitle1'}>
                      Deliveries: 28
                    </GradientText>
                  </Box>
                  <Hidden mdDown>
                    <Box maxWidth={'600px'}>
                      <ReadMore>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia
                        in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere
                        cubilia Curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus
                        ultrices posuere cubilia Curae.
                      </ReadMore>
                    </Box>
                  </Hidden>
                </Box>
              </Box>
              <Box display={'felx'} flexWrap={'nowrap'} mt={2} mb={4}>
                <Button
                  color="secondary"
                  size="large"
                  sx={{
                    px: 6,
                    mr: 2,
                  }}
                >
                  <Image src={'assets/search-chef/follow.png'} alt={'follow-image'} />
                </Button>
                <IconButton color={'secondary'} sx={{ border: '2px solid', borderRadius: '8px' }}>
                  <Iconify icon={'mdi:cards-heart-outline'} />
                </IconButton>
              </Box>
            </Box>
            <Hidden mdUp>
              <Box maxWidth={'600px'}>
                <ReadMore>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.
                </ReadMore>
              </Box>
            </Hidden>
          </Box>
        </Box>
        <Box>
          <Divider />
          <Box my={4}>
            <Box>
              <Typography variant="h3" color={'black'}>
                Austin Chefs
              </Typography>
            </Box>
            <Box
              display={'flex'}
              position={'relative'}
              zIndex={10}
              justifyContent={'space-between'}
              overflow={'auto'}
              gap={2}
              py={2}
            >
              {categories.map((item) => (
                <Button
                  key={item.id}
                  variant={'outlined'}
                  sx={(theme) => ({
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                    border: item.id === selectedCategory && 'none',
                    background: item.id === selectedCategory ? '#595959' : 'white',
                    color: item.id === selectedCategory ? theme.palette.GradientText : '#31342B',
                  })}
                  onClick={() => setSelectedCategory(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Divider />
        </Box>
      </Container>
    </RootStyle>
  );
}
