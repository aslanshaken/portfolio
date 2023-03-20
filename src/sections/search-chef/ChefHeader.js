import { Avatar, Box, Button, colors, Divider, IconButton, Typography, Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HEADER } from '../../config';
import Container from '../../components/Container';
import { useRouter } from 'next/router';
import Iconify from '../../components/Iconify';
import GradientText from '../../components/GradientText';
import cssStyles from '../../utils/cssStyles';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ChefHeader(theme) {
  const router = useRouter();
  const { chef } = router.query;

  return (
    <Box>
      <Container>
        <RootStyle>
          <Box display={'flex'} p={2} mb={4} mt={8}>
            <Box px={2} width={'100%'}>
              <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'}>
                <Box display={'flex'} gap={2}>
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
                  <Box>
                    <Typography variant="h3" color={'black'}>
                      Sheff's Michael menu
                    </Typography>
                    <Box display={'flex'} gap={2} flexWrap={'wrap'}>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia
                        in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere
                        cubilia Curae.
                      </Box>
                    </Hidden>
                  </Box>
                </Box>
                <Box display={'felx'} flexWrap={'nowrap'} mt={2} mb={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                      px: 6,
                      mr: 2,
                    }}
                  >
                    Follow
                  </Button>
                  <IconButton color={'secondary'} sx={{ border: '2px solid', borderRadius: '8px' }}>
                    <Iconify icon={'mdi:cards-heart-outline'} />
                  </IconButton>
                </Box>
              </Box>
              <Hidden mdUp>
                <Box maxWidth={'600px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.
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
              <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={2} py={2}>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        </RootStyle>
      </Container>
    </Box>
  );
}
