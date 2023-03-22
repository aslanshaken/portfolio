// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import FoodSection from '../../../../sections/search-chef/chef-detail/FoodSection';
import ChefHeader from '../../../../sections/search-chef/chef-detail/ChefHeader';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CityPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CityPage() {
  return (
    <Page title="Search Chef">
      <ChefHeader title="Japan cuisine" topBorder={true} backgroundImage="/assets/search-chef/hero-header.png" />
      <FoodSection />
    </Page>
  );
}
