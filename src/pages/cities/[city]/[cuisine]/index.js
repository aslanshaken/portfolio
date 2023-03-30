// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import ChooseChef from '../../../../sections/search-chef/ChooseChef';
import HeroHeader from '../../../../components/HeroHeader';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CityPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CityPage() {
  return (
    <Page title="Search Chef">
      <HeroHeader
        backgroundImage="/assets/search-chef/chefs/hero-header.png"
        city="Austin"
        cuisine="Central Asia cuisine"
      />
      <ChooseChef />
    </Page>
  );
}
