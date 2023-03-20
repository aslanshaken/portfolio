import { Avatar, Box, Button, Divider, IconButton, Typography, Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HEADER } from '../../config';
import Container from '../../components/Container';
import { useRouter } from 'next/router';
import Iconify from '../../components/Iconify';
import GradientText from '../../components/GradientText';
import { useState } from 'react';
import ReadMore from '../../components/ReadMore';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ChefHeader() {
  const router = useRouter();
  const { chef } = router.query;
  const [ isReadMore, setIsReadMore ] = useState(false);

  return (
    <Box>
      <Container>
        <RootStyle>
          <Box display={'flex'} p={2} mb={4} mt={8}>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut
                          lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices
                          posuere cubilia Curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit
                          nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci
                          luctus ultrices posuere cubilia Curae.
                        </ReadMore>
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
                  <ReadMore>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
                    elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia
                    Curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut
                    lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere
                    cubilia Curae.
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
                  Available dates
                </Typography>
              </Box>
              <Box display={'flex'} justifyContent={'space-between'} flexWrap={'nowrap'} overflow={'auto'} gap={2} py={2}>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
                  March 17
                </Box>
                <Box bgcolor={'#DAEFE5'} whiteSpace={'nowrap'} py={2} px={4} borderRadius={1}>
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
