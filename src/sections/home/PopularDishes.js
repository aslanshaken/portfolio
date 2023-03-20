import React from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme } from '@mui/material';
import CarouselArrows from './CarouselArrows';
import GradientText from '../../components/GradientText';
import DisheCard from '../../components/DisheCard';
import styled from '@emotion/styled';
import Container from '../../components/Container';

const RootStyle = styled(Box)(({ theme }) => ({
  '& .slick-current': {
    '& .MuiPaper-root': {
      boxShadow: theme.customShadows.z12,
      transform: 'scale(1.08)',
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
      {
        breakpoint: theme.breakpoints.values['sm'],
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
    <RootStyle sx={{ pt: '60px' }}>
      <GradientText color="secondary" variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 700 }}>
        Also you may like
      </GradientText>
      <Typography
        variant="h2"
        sx={{ fontSize: '60px !important', textAlign: 'center', fontWeight: 500, color: 'text.primary', pb: '30px' }}
      >
        Most popular dishes
      </Typography>
      <Box sx={{ position: 'relative', width: '100%',overflowX: 'hidden' }}>
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
          <Container>
            <Slider ref={carouselRef} {...settings}>
              {carouselData.map((item) => (
                <DisheCard
                  key={item.title}
                  name={item.title}
                  cover={`/assets/home/slide/${item.filename}.png`}
                  description={item.description}
                  isActive={item.isActive}
                />
              ))}
            </Slider>
          </Container>
        </CarouselArrows>
      </Box>
      <Box mt={10} />
    </RootStyle>
  );
}
