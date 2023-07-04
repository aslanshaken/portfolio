import { Box, Grid, Typography } from '@mui/material';
import Container from 'src/components/Container';
import Image from 'src/components/Image';

const cards = [
  {
    image: 'image 33',
    title: '1',
    content: `Discover nearby restaurants and home chefs that offer delicious food`,
    type: 'png',
  },
  {
    image: 'image 34',
    title: '2',
    type: 'png',
    content: `Choose your food - healthy, homemade, desserts and more`,
  },
  { image: 'image 35', title: '3', content: `Sit back and relax - we'll deliver it to your door`, type: 'png' },
];

export default function HowItWork() {
  return (
    <Container>
      <Typography variant="h3" fontWeight={'500'} color={'secondary'} textAlign={'center'} mt={5}>
        How it works
      </Typography>
      <Grid container mt={2}>
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
                src={`/assets/home/how-it-work/${item.image}.${item.type}`}
                alt="green iguana"
                sx={{ height: 210, width: '100%' }}
              />
            </Box>
            <Typography gutterBottom variant="h3" my={4}>
              {item.title}
            </Typography>
            <Typography variant="h6" fontWeight={'500'}>
              {item.content}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
