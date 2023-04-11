import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Paper, Link, CardContent } from '@mui/material';
// components
import Image from '../../../components/Image';
import Iconify from '../../../components/Iconify';
import { CarouselArrows } from '../../../components/carousel';
import FoodCard from '../../../components/FoodCard';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(() => ({
  overflow: 'hidden',
  position: 'relative',
}));

FoodCarousel.propTypes = {
  foods: PropTypes.array,
};

// ----------------------------------------------------------------------

export default function FoodCarousel({ foods }) {
  const carouselRef = useRef(null);

  const settings = {
    slidesToShow: 4,
    centerMode: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 650,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const handlePrevious = (e) => {
    carouselRef.current?.slickPrev();
    e.stopPropagation();
  };

  const handleNext = (e) => {
    carouselRef.current?.slickNext();
    e.stopPropagation();
  };
  return (
    <RootStyle px={{ xs: 2, sm: 8, lg: 7 }}>
      <CarouselArrows
        onNext={(e) => handleNext(e)}
        onPrevious={(e) => handlePrevious(e)}
        sx={{
          '& .arrow': {
            border: { md: '1px solid #163E2B' },
            borderRadius: 10,
            // '&.left': { left: { xs: 30, lg: 0 } },
            // '&.right': { right: { xs: 30, lg: 0 } },
          },
          '& .MuiButtonBase-root': {
            color: '#163E2B',
          },
        }}
      >
        <Slider ref={carouselRef} {...settings} infinite={foods.length > 3}>
          {foods?.map((food) => (
            <FoodCard
              key={food?.id}
              name={food?.title}
              cover={food?.image_url}
              price={food?.current_price}
              we_kc={`${food?.gramm} gr / ${food?.kc} kc`}
            />
          ))}
        </Slider>
      </CarouselArrows>
    </RootStyle>
  );
}
