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
import { format } from 'date-fns';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ChefPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChefPage() {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { deliveryDate } = checkout;

  const [selectedCategory, setSelectedCategory] = useState();

  const { cuisines } = useSelector(CITYCUISINE_SELECTOR);

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const { cityId, cuisineId, chefId } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChefs(cityId, cuisineId, chefId));
  }, [dispatch, router, isAuthenticated, cuisineId, chefId, cityId, cuisines]);

  return (
    <Page title="Search Chef">
      <ChefHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FoodSection selectedCategory={selectedCategory} />
    </Page>
  );
}
