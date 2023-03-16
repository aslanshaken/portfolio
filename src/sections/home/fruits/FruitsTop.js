// @mui
import { Box } from '@mui/material';
import Image from 'src/components/Image';

// -----------------------------------------------------
const POSITIONS = {
  toma: { position: 'absolute', top: { md: '60px', xs: '60px' }, right: '20%' },
  pepper: { position: 'absolute', top: { md: '120px', xs: '70px' }, right: '9%' },
  cucumber: { position: 'absolute', top: { md: '250px', xs: '170px' }, right: '9%' },
  garlic: { position: 'absolute', top: { md: '240px', xs: '160px' }, right: '0%' },
};

const STYLES = {
  toma: {
    height: {
      md: '130px',
      xs: '60px',
    },
    width: {
      md: '130px',
      xs: '60px',
    },
  },
  pepper: {
    height: {
      md: '100px',
      xs: '60px',
    },
    width: {
      md: '100px',
      xs: '60px',
    },
  },
  cucumber: { height: { md: '90px', xs: '65px' }, width: { md: '80px', xs: '50px' } },
  garlic: { height: { md: '54px', xs: '30px' }, width: { md: '42px', xs: '30px' } },
};

const IMAGES = [{ name: 'toma' }, { name: 'pepper' }, { name: 'cucumber' }, { name: 'garlic' }];
// -----------------------------------------------------
export default function FruitsTop() {
  return (
    <>
      {IMAGES.map((image) => (
        <Box key={image.name} sx={POSITIONS[image.name]}>
          <Image src={`/assets/home/vegetable/${image.name}.png`} alt={image.name} sx={STYLES[image.name]} />
        </Box>
      ))}
    </>
  );
}
