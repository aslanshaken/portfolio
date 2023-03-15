// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import HeroSection from 'src/sections/menu/HeroSection';
import FoodSection from 'src/sections/menu/FoodSection';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

Menupage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Menupage() {
  return (
    <Page title="Menu">
      <HeroSection />
      <FoodSection />
    </Page>
  );
}
