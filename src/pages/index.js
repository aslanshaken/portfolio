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

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
      <HomeHero />
      <AwesomeFood />
      <SearchChef />
      <Benefit />
      <PopularDishes />
    </Page>
  );
}
