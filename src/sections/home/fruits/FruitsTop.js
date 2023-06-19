// @mui
import { Box } from '@mui/material';
import Image from '../../../components/Image';

// -----------------------------------------------------
const POSITIONS = {
  cake: { position: 'absolute', top: { md: '10px', xs: '60px' }, right: '20%' },
  cookies: { position: 'absolute', top: { md: '120px', xs: '70px' }, right: '9%' },
};

const STYLES = {
  cake: {
    height: {
      md: '200px',
      xs: '130px',
    },
    width: {
      md: '200px',
      xs: '130px',
    },
  },
  cookies: {
    height: {
      md: '100px',
      xs: '60px',
    },
    width: {
      md: '100px',
      xs: '60px',
    },
  },
};

const IMAGES = [{ name: 'cake' }, { name: 'cookies' }];
// -----------------------------------------------------
export default function FruitsTop() {
  return (
    <>
      {IMAGES.map((image) => (
        <Box key={image.name} sx={POSITIONS[image.name]}>
          <Image src={`/assets/home/desserts/${image.name}.png`} alt={image.name} sx={STYLES[image.name]} />
        </Box>
      ))}
    </>
  );
}
