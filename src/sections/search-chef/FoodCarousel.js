import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Paper, Link, CardContent } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';
import FoodCard from '../../components/FoodCard';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(() => ({
  overflow: 'hidden',
  position: 'relative',
}));

FoodCarousel.propTypes = {
  foods: PropTypes.array
}

// ----------------------------------------------------------------------

export default function FoodCarousel({foods}) {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const settings = {
    slidesToShow: 3,
    centerMode: true,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, centerPadding: '0' },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, centerPadding: '0' },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          '& .arrow': {
            '&.left': { left: 16 },
            '&.right': { right: 16 },
          },
        }}
      >
        <Slider ref={carouselRef} {...settings}>
            {foods.map((food, _i) => (
              <Box key={_i}>
                <FoodCard
                  name={food.name}
                  cover={`/assets/search-chef/foods/${food.filename}.png`}
                  price={food.price}
                  we_kc={`${food.weight} gr / ${food.kc} kc`}
                />
              </Box>
            ))}
        </Slider>
      </CarouselArrows>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

function CarouselItem({ item }) {
  const { image, title } = item;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Image alt={title} src={image} ratio="3/4" />
      <CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          backgroundImage: (theme) =>
            `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(theme.palette.grey[900], 0)} 100%)`,
        }}
      >
        <Link
          color="inherit"
          variant="overline"
          sx={{
            opacity: 0.72,
            alignItems: 'center',
            display: 'inline-flex',
            transition: (theme) => theme.transitions.create('opacity'),
            '&:hover': { opacity: 1 },
          }}
        >
          learn More
          <Iconify icon={'eva:arrow-forward-fill'} sx={{ width: 16, height: 16, ml: 1 }} />
        </Link>
      </CardContent>
    </Paper>
  );
}
