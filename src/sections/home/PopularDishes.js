import React, { useEffect } from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import CarouselArrows from './CarouselArrows';
import DisheCard from '../../components/DisheCard';
import styled from '@emotion/styled';
import Container from '../../components/Container';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

const RootStyle = styled(Box)(({ theme }) => ({
  '& .slick-cloned': {
    '& .MuiPaper-root': {
      boxShadow: 'none',
    },
  },
  '& .slick-current': {
    '& .MuiPaper-root': {
      boxShadow: theme.customShadows.z12,
      // transform: 'scale(1.08)',
      transition: '300ms',
      '& .feature-btn-box': {
        display: 'flex',
      },
    },
  },
}));

const carouselData = [
  {
    id: '1',
    filename: 'slide1',
    title: 'Vestibulum ante ipsum',
    description: 'Ingredients placeholder is here, until we will have our own',
  },
  { id: '2', filename: 'slide2', title: 'Donec velit neque, auctor sit amet aliquam vel', isActive: true },
  {
    id: '3',
    filename: 'slide3',
    title: 'Mauris blandit aliquet elit',
    description: 'Ingredients placeholder is here, until we will have our own',
  },
  {
    id: '4',
    filename: 'slide1',
    title: 'Vestibulum ante ipsum',
    description: 'Ingredients placeholder is here, until we will have our own',
  },
];

export default function PopularDishes() {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const { popularFoods = [] } = useSelector(FOOD_SELECTOR);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values['lg'],
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values['md'],
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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
    popularFoods?.length > 0 && (
      <RootStyle sx={{ pt: 15 }}>
        <Container>
          <Typography variant="h3" color={'secondary'} sx={{ textAlign: 'center', fontWeight: 500, pb: '30px' }}>
            Most popular food
          </Typography>
          <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
            <CarouselArrows
              onNext={handleNext}
              onPrevious={handlePrevious}
              sx={{
                '& .arrow': {
                  '&.left': { left: { xs: 10 }, top: '300px' },
                  '&.right': { right: { xs: 10 }, top: '300px' },
                },
              }}
            >
              <Container>
                <Slider ref={carouselRef} {...settings}>
                  {popularFoods?.map((item, _i) => (
                    <DisheCard key={_i} data={item} />
                  ))}
                </Slider>
              </Container>
            </CarouselArrows>
          </Box>
          <Box mt={10} />
        </Container>
      </RootStyle>
    )
  );
}
