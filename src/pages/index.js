// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import HomeHero from '../sections/home/HomeHero';
import AwesomeFood from '../sections/home/AwesomeFood';
import SearchChef from '../sections/home/Menu';
import Benefit from '../sections/home/Benefit';
import PopularDishes from '../sections/home/PopularDishes';
import WelcomeDialog from 'src/sections/home/WelcomeDialog';
import ComingDialog from 'src/sections/home/ComingDialog';
import { useEffect, useState } from 'react';
import CityDialog from 'src/sections/home/CityDialog';
import CuisineDialog from 'src/sections/home/CuisineDialog';
import GeneralQuestions from 'src/sections/home/GeneralQuestions';
import SearchHomeHero from 'src/sections/home/SearchHomeHero';
import HowItWork from 'src/sections/home/HowItWork';
import { Box } from '@mui/material';
import BringFood from 'src/sections/home/BringFood';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const { asPath } = useRouter();
  const cityDialogOpen = asPath === '/#';
  const [welcomeDialogIsOpen, setWelcomeDialogIsOpen] = useState(false);
  const [comingDialogIsOpen, setComingDialogIsOpen] = useState(false);
  const [cityDialogIsOpen, setCityDialogIsOpen] = useState(false);
  const [cuisineDialogIsOpen, setCuisineDialogIsOpen] = useState(false);
  useEffect(() => {
    setWelcomeDialogIsOpen(!cityDialogOpen);
    setCityDialogIsOpen(cityDialogOpen);
  }, [cityDialogOpen]);

  return (
    <Page title="Home">
      <WelcomeDialog isOpen={welcomeDialogIsOpen} setIsOpen={setWelcomeDialogIsOpen} />
      <ComingDialog
        isOpen={comingDialogIsOpen}
        setIsOpen={setComingDialogIsOpen}
        setCityDialogIsOpen={setCityDialogIsOpen}
      />
      <CityDialog
        isOpen={cityDialogIsOpen}
        setIsOpen={setCityDialogIsOpen}
        setCuisineDialogIsOpen={setCuisineDialogIsOpen}
      />
      <CuisineDialog isOpen={cuisineDialogIsOpen} setIsOpen={setCuisineDialogIsOpen} />

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
