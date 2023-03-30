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
import BringFood from 'src/sections/home/BringFood';
import WelcomeDialog from 'src/sections/home/WelcomeDialog';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DIALOG_SELECTOR, setInitialized } from 'src/redux/slices/dialog';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const dispatch = useDispatch();
  const { initialized } = useSelector(DIALOG_SELECTOR);
  const [welcomeDialogIsOpen, setWelcomeDialogIsOpen] = useState(false);

  useEffect(() => {
    if (!initialized) setWelcomeDialogIsOpen(true);
  }, [initialized]);

  useEffect(() => {
    dispatch(setInitialized(true));
  }, [dispatch, welcomeDialogIsOpen]);
  return (
    <Page title="Home">
      <WelcomeDialog isOpen={welcomeDialogIsOpen} setIsOpen={setWelcomeDialogIsOpen} />

      {/* <HomeHero /> */}
      <SearchHomeHero />
      <HowItWork />
      <BringFood />
      <PopularDishes />
      {/* <AwesomeFood /> */}
      {/* <SearchChef /> */}
      {/* <Benefit /> */}
      <GeneralQuestions />
      <Box mt={10} />
    </Page>
  );
}
