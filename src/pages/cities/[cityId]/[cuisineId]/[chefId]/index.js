// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
// sections
import FoodSection from 'src/sections/search-chef/chef-detail/FoodSection';
import ChefHeader from 'src/sections/search-chef/chef-detail/ChefHeader';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useDispatch } from 'src/redux/store';
import { getChefs } from 'src/redux/slices/city';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ChefPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChefPage() {
  const [selectedCategory, setSelectedCategory] = useState();

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const { cuisineId, chefId } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;

    dispatch(getChefs(cuisineId, chefId));
  }, [isAuthenticated, cuisineId, chefId]);

  return (
    <Page title="Search Chef">
      <ChefHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FoodSection selectedCategory={selectedCategory} />
    </Page>
  );
}
