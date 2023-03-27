// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
// sections
import FoodSection from 'src/sections/search-chef/chef-detail/FoodSection';
import ChefHeader from 'src/sections/search-chef/chef-detail/ChefHeader';

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
