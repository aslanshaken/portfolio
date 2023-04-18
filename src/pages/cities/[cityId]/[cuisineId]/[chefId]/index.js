// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
// sections
import FoodSection from 'src/sections/search-chef/chef-detail/FoodSection';
import ChefHeader from 'src/sections/search-chef/chef-detail/ChefHeader';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getChefs } from 'src/redux/slices/city';
import { useRouter } from 'next/router';
import LoadingScreen from 'src/components/LoadingScreen';
import { getFoodsByChef } from 'src/redux/slices/food';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ChefPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChefPage() {
  const [selectedCategory, setSelectedCategory] = useState();

  const { cuisines } = useSelector(CITYCUISINE_SELECTOR);

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const { cityId, cuisineId, chefId } = router.query;

  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      dispatch(getChefs(cityId, cuisineId, chefId));
      await dispatch(getFoodsByChef(cityId, cuisineId, chefId));
      setIsLoading(false);
    }

    fetch();
  }, [dispatch, router, isAuthenticated, cuisineId, chefId, cityId, cuisines]);

  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Search Chef">
      <ChefHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FoodSection selectedCategory={selectedCategory} />
    </Page>
  );
}
