// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import HomeHero from '../sections/home/HomeHero';
import AwesomeFood from '../sections/home/AwesomeFood';
import Menu from '../sections/home/Menu';
import Benefit from '../sections/home/Benefit';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <HomeHero />
      <AwesomeFood />
      <Menu />
      <Benefit />
    </Page>
  );
}
