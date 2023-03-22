import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
//
import Iconify from '../../components/Iconify';
import { IconButtonAnimate } from '../../components/animate';

// ----------------------------------------------------------------------

const BUTTON_SIZE = 40;

const ArrowStyle = styled(IconButtonAnimate)(({ theme }) => ({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px transparent',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.secondary.main,
  backgroundClip: 'padding-box',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    margin: -1,
    borderRadius: 'inherit',
    background: theme.palette.background.hero,
  },
}));

// ----------------------------------------------------------------------

CarouselArrows.propTypes = {
  children: PropTypes.node,
  customIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  filled: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export default function CarouselArrows({
  customIcon, // Set icon right
  onNext,
  onPrevious,
  children,
  filled,
  ...other
}) {
  const theme = useTheme();

  const isRTL = theme.direction === 'rtl';

  const style = {
    position: 'absolute',
    mt: -2.5,
    top: '50%',
    zIndex: 9,
  };

  if (children) {
    return (
      <Box {...other}>
        <Box className="arrow left" sx={{ ...style, left: 0 }}>
          <ArrowStyle onClick={onPrevious}>{leftIcon(customIcon, isRTL)}</ArrowStyle>
        </Box>

        {children}

        <Box className="arrow right" sx={{ ...style, right: 0 }}>
          <ArrowStyle onClick={onNext}>{rightIcon(customIcon, isRTL)}</ArrowStyle>
        </Box>
      </Box>
    );
  }

  return (
    <Stack direction="row" spacing={1} {...other}>
      <ArrowStyle className="arrow left" filled={filled} onClick={onPrevious}>
        {leftIcon(customIcon, isRTL)}
      </ArrowStyle>
      <ArrowStyle className="arrow right" filled={filled} onClick={onNext}>
        {rightIcon(customIcon, isRTL)}
      </ArrowStyle>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const leftIcon = (customIcon) => (
  <Iconify
    icon={customIcon ? customIcon : 'material-symbols:arrow-back-ios-new-rounded'}
    sx={{
      width: 20,
      height: 20,
    }}
  />
);

const rightIcon = (customIcon) => (
  <Iconify
    icon={customIcon ? customIcon : 'material-symbols:arrow-forward-ios-rounded'}
    sx={{
      width: 20,
      height: 20,
    }}
  />
);
