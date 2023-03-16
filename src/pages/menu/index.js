// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import MenuHero from '../../sections/menu/MenuHero';
import ChooseCuisine from '../../sections/menu/ChooseCuisine';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

Menupage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Menupage() {
  return (
    <Page title="Menu">
      <MenuHero />
      <ChooseCuisine />
    </Page>
  );
}
