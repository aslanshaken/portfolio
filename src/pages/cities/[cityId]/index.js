// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
// sections
import ChooseCuisines from '../../../sections/search-chef/ChooseCuisines';
import HeroHeader from '../../../components/HeroHeader';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CityPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CityPage() {
  return (
    <Page title="Search Chef">
      <HeroHeader title="New-York cuisines" topBorder={true} backgroundImage="/assets/search-chef/hero-header.png" />
      <ChooseCuisines />
    </Page>
  );
}
