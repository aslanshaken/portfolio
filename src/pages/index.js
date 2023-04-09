// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import PopularDishes from '../sections/home/PopularDishes';
import GeneralQuestions from 'src/sections/home/GeneralQuestions';
import SearchHomeHero from 'src/sections/home/SearchHomeHero';
import HowItWork from 'src/sections/home/HowItWork';
import { Box } from '@mui/material';
import WelcomeDialog from 'src/sections/home/WelcomeDialog';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DIALOG_SELECTOR, setInitialized } from 'src/redux/slices/dialog';
import useAuth from 'src/hooks/useAuth';
import { clearCart, getPopularFoods } from 'src/redux/slices/food';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const { initialized } = useSelector(DIALOG_SELECTOR);
  const [welcomeDialogIsOpen, setWelcomeDialogIsOpen] = useState(false);

  useEffect(() => {
    if (!initialized) setWelcomeDialogIsOpen(true);
    if (!isAuthenticated) dispatch(clearCart());
  }, [dispatch, initialized, isAuthenticated]);

  useEffect(() => {
    dispatch(setInitialized(true));
    dispatch(getPopularFoods());
  }, [dispatch, welcomeDialogIsOpen]);
  return (
    <Page title="Home">
      <WelcomeDialog isOpen={welcomeDialogIsOpen} setIsOpen={setWelcomeDialogIsOpen} />

      {/* <HomeHero /> */}
      <SearchHomeHero />
      <HowItWork />
      {/* <BringFood /> */}
      <PopularDishes />
      {/* <AwesomeFood /> */}
      {/* <SearchChef /> */}
      {/* <Benefit /> */}
      <GeneralQuestions />
      <Box mt={10} />
    </Page>
  );
}
