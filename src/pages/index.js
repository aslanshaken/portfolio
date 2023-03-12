// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import HomeHero from 'src/sections/home/HomeHero';

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
    </Page>
  );
}
