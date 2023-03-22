// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import ChooseCity from '../../sections/search-chef/ChooseCity';
import HeroHeader from '../../components/HeroHeader';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CitiesPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CitiesPage() {
  return (
    <Page title="Search Chef">
      <HeroHeader title={'Choose your city'} />
      <ChooseCity />
    </Page>
  );
}
