import PropTypes from 'prop-types';
import React from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, Paper } from '@mui/material';
import CarouselArrows from './CarouselArrows';
import GradientText from 'src/components/GradientText';
import DisheCard from 'src/components/DisheCard';
import styled from '@emotion/styled';

const RootStyle = styled(Box)(({ theme }) => ({
  '& .MuiPaper-root': {
    '&:hover .feature-btn-box': {
      opacity: 1,
    },
  },
  '& .slick-current': {
    '& .MuiPaper-root': {
      boxShadow: theme.customShadows.z12,
      transform: 'scale(1.08)',
      transition: '300ms',
      '&:hover .feature-btn-box': {
        opacity: 1,
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
    title: 'slide4',
    title: 'Vestibulum ante ipsum',
    description: 'Ingredients placeholder is here, until we will have our own',
  },
];

export default function PopularDishes() {
  const carouselRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '20px',
  };
  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return (
    <RootStyle sx={{ position: 'relative', pt: '60px' }}>
      <GradientText color="secondary" variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 700 }}>
        Also you may like
      </GradientText>
      <Typography
        variant="h2"
        sx={{ fontSize: '60px !important', textAlign: 'center', fontWeight: 500, color: 'text.primary', pb: '30px' }}
      >
        Most popular dishes
      </Typography>
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
        <Container maxWidth="xl">
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
      <Box mt={10} />
    </RootStyle>
  );
}
