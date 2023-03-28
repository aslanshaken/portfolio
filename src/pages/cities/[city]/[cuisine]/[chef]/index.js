// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
// sections
import FoodSection from 'src/sections/search-chef/chef-detail/FoodSection';
import ChefHeader from 'src/sections/search-chef/chef-detail/ChefHeader';
import { useState } from 'react';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CityPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CityPage() {
  const [seledtedDate, setSelectedDate] = useState();

  return (
    <Page title="Search Chef">
      <ChefHeader seledtedDate={seledtedDate} setSelectedDate={setSelectedDate} />
      <FoodSection seledtedDate={seledtedDate} />
    </Page>
  );
}
