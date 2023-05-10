import { Box, Grid, Typography } from '@mui/material';
import Container from 'src/components/Container';
import Image from 'src/components/Image';

const cards = [
  { image: 'image 33', title: '1', content: `Discover nearby chefs offering diverse cuisines"` },
  { image: 'image 35', title: '2', content: `Select your meals - whether fresh or frozen` },
  { image: 'image 36', title: '3', content: `Sit back and relax - we'll deliver it to your door` },
];

export default function HowItWork() {
  return (
    <Container>
      <Typography variant="h3" fontWeight={'500'} color={'secondary'} textAlign={'center'} mt={10}>
        How it works
      </Typography>
      <Grid container mt={8}>
        {cards.map((item, _i) => (
          <Grid
            item
            key={_i}
            md={4}
            xs={12}
            textAlign={'center'}
            p={6}
            sx={{
              borderBottom: { md: '4px solid #DCDCDC' },
              borderRight: { md: _i < cards.length - 1 && '4px solid #DCDCDC' },
            }}
          >
            <Box>
              <Image
                src={`/assets/home/how-it-work/${item.image}.jpg`}
                alt="green iguana"
                sx={{ height: 320, width: '100%' }}
              />
            </Box>
            <Typography gutterBottom variant="h3" my={6}>
              {item.title}
            </Typography>
            <Typography variant="h5" fontWeight={'500'}>
              {item.content}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
