import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Container from 'src/components/Container';

export default function HowItWork() {
  return (
    <Container>
      <Stack p={8}>
        <Typography m={'auto'} variant="h2" fontWeight={'500'}>
          How it works
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} textAlign={'center'}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/assets/home/how-it-work/image 33.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find local home-chefs with 50+ cuisines available
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/assets/home/how-it-work/image 35.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Select your meals - whether fresh or frozen
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/assets/home/how-it-work/image 36.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sit back and relax - we'll deliver it to your door
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
