import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, IconButton, Typography, Hidden, Stack } from '@mui/material';
import Container from '../../../components/Container';
import { useRouter } from 'next/router';
import Iconify from '../../../components/Iconify';
import GradientText from '../../../components/GradientText';
import ReadMore from '../../../components/ReadMore';
import Image from 'src/components/Image';
import HeroHeader from 'src/components/HeroHeader';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';

const categories = [
  {
    id: '1',
    label: 'Today',
  },
  {
    id: '2',
    label: 'Tomorrow',
  },
  {
    id: '3',
    label: 'March 17',
  },
  {
    id: '4',
    label: 'March 17',
  },
  {
    id: '5',
    label: 'March 17',
  },
  {
    id: '6',
    label: 'March 17',
  },
  {
    id: '7',
    label: 'March 17',
  },
];

ChefHeader.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function ChefHeader({ selectedCategory = '1', setSelectedCategory }) {
  const router = useRouter();
  const { chefId } = router.query;

  const { cuisine } = useSelector(CITYCUISINE_SELECTOR);
  const chef = useSelector(CITYCUISINE_SELECTOR)?.chef?.chef;

  return (
    <Container>
      <HeroHeader city="Austin" cuisine={cuisine?.name} chef={`${chef?.first_name} ${chef?.last_name}`} />
      <Box display={'flex'} mb={4}>
        <Box px={2} width={'100%'}>
          <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'}>
            <Box display={'flex'} gap={2}>
              <Box position={'relative'}>
                <Avatar
                  alt="Travis Howard"
                  src={chef?.image_url}
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
                <Typography color={'black'} variant={'h3'} fontWeight={'600'} pt={1}>
                  {chef?.first_name} {chef?.last_name}
                </Typography>
                <Box display={'flex'} gap={2} flexWrap={'wrap'} py={1}>
                  <Typography display={{ xs: 'block', md: 'none' }} color={'black'} variant={'subtitle1'}>
                    by ADS
                  </Typography>
                  <Typography display={{ xs: 'block', md: 'none' }} color={'black'} variant={'subtitle1'}>
                    Zip code: 78717
                  </Typography>
                  <Typography color={'black'} variant={'subtitle1'}>
                    {cuisine?.name}
                  </Typography>
                  <Typography color={'black'} variant={'subtitle1'}>
                    Rating: {chef?.rating}
                  </Typography>
                  <Typography color={'black'} variant={'subtitle1'}>
                    Deliveries: {chef?.orders}
                  </Typography>
                  <GradientText color={'primary'} variant={'subtitle1'}>
                    Certified chef
                  </GradientText>
                  <Typography display={{ md: 'block', xs: 'none' }} color={'black'} variant={'subtitle1'}>
                    Zip code: 78717
                  </Typography>
                </Box>
                <Hidden mdDown>
                  <Box maxWidth={'600px'}>
                    <ReadMore>{chef?.about_me}</ReadMore>
                  </Box>
                </Hidden>
              </Box>
            </Box>
            <Stack direction={'row'} flexWrap={'nowrap'} mt={2} mb={4} spacing={1}>
              <Image
                src={'/assets/search-chef/follow.png'}
                sx={{ border: '2px solid', borderRadius: '13px', height: 40, width: 40, cursor: 'pointer' }}
                alt={'follow-image'}
              />
              <IconButton color={'secondary'} sx={{ border: '2px solid', height: 40, width: 40, borderRadius: '13px' }}>
                <Iconify icon={'mdi:cards-heart-outline'} />
              </IconButton>
            </Stack>
          </Box>
          <Hidden mdUp>
            <Box maxWidth={'600px'}>
              <ReadMore>{chef?.about_me}</ReadMore>
            </Box>
          </Hidden>
        </Box>
      </Box>
      <Box>
        <Divider />
        <Box my={4}>
          <Box>
            <Typography variant="h3" color={'black'}>
              Available dates
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
                variant={'contained'}
                sx={{
                  fontWeight: 500,
                  px: 4,
                  whiteSpace: 'nowrap',
                  minWidth: 'fit-content',
                  border: item.id === selectedCategory && 'none',
                  background: item.id === selectedCategory ? '#B3B3B3' : '#DAEFE5',
                  color: '#31342B',
                }}
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
  );
}
