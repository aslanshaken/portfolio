import NextLink from 'next/link';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import PopularDishes from '../sections/home/PopularDishes';
import GeneralQuestions from 'src/sections/home/GeneralQuestions';
import SearchHomeHero from 'src/sections/home/SearchHomeHero';
import HowItWork from 'src/sections/home/HowItWork';
import { Box, Button, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DIALOG_SELECTOR, openDialog, setInitialized } from 'src/redux/slices/dialog';
import useAuth from 'src/hooks/useAuth';
import { FOOD_SELECTOR, getPopularFoods, updateFoodCart } from 'src/redux/slices/food';
import LoadingScreen from 'src/components/LoadingScreen';
import { useRouter } from 'next/router';
import { PATH_AUTH, PATH_PAGE } from 'src/routes/paths';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token, previous } = router.query;
  const { isAuthenticated, confirm } = useAuth();
  const { initialized } = useSelector(DIALOG_SELECTOR);
  const { loading } = useSelector(FOOD_SELECTOR);
  const [welcomeDialogIsOpen, setWelcomeDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      await confirm({ token: token });
      router.push(PATH_AUTH.login);
    };

    if (token && !isAuthenticated) {
      fetch();
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (!initialized) setWelcomeDialogIsOpen(true);
    if (!isAuthenticated) dispatch(updateFoodCart({ actionType: 'clear' }));
  }, [dispatch, initialized, isAuthenticated]);

  useEffect(() => {
    dispatch(setInitialized(true));
    // dispatch(getPopularFoods());
  }, [dispatch, welcomeDialogIsOpen]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <Page title="Home">
      {/* <WelcomeDialog isOpen={welcomeDialogIsOpen} setIsOpen={setWelcomeDialogIsOpen} /> */}
      {/* <PaymentDialog open /> */}

      {/* <HomeHero /> */}
      <SearchHomeHero />
      <HowItWork />
      {/* <BringFood /> */}
      {/* <PopularDishes /> */}
      {/* <AwesomeFood /> */}
      {/* <SearchChef /> */}
      {/* <Benefit /> */}
      <GeneralQuestions />
      <Box justifyContent={'center'} width={'100%'} display={'flex'} my={8}>
        <Button
          variant="contained"
          size="large"
          onClick={() => dispatch(openDialog('choose_city_dialog'))}
          sx={{
            m: 'auto',
            borderRadius: 10,
            px: 6,
            height: 45,
            minWidth: 230,
            color: 'gray',
            fontSize: { xs: 16, sm: 18 },
            fontWeight: 600,
            background: 'transparent',
            border: 'solid 3px',

            '&:hover': {
              background: 'transparent',
              borderColor: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <Typography variant="h6">Find Food</Typography>
        </Button>
      </Box>
    </Page>
  );
}
