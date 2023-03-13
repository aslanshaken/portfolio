// @mui
import { Box } from '@mui/material';
import Image from 'src/components/Image';

// -----------------------------------------------------
const STYLES = {
  garlic: { mt: { md: '85px', xs: '30px' }, height: { md: '54px', xs: '30px' }, width: { md: '42px', xs: '30px' } },
  pepper: { mt: { md: 0, xs: '10px' }, height: { md: '100px', xs: '50px' }, width: { md: '100px', xs: '50px' } },
  toma: { mt: { md: '-20px', xs: 0 }, height: { md: '160px', xs: '60px' }, width: { md: '160px', xs: '60px' } },
};

const IMAGES = [{ name: 'garlic' }, { name: 'pepper' }, { name: 'toma' }];

// -----------------------------------------------------
export default function FruitsBottom() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: { md: 20, xs: 5 } }}>
      {IMAGES.map((image) => (
        <Image src={`/assets/home/bottom_vegetable/${image.name}.png`} alt={image.name} sx={STYLES[image.name]} />
      ))}
    </Box>
  );
}
