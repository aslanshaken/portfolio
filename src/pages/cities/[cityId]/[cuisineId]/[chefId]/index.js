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
import { CITYCUISINE_SELECTOR, getChef, getChefs } from 'src/redux/slices/city';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ChefPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChefPage() {
  const [selectedCategory, setSelectedCategory] = useState(format(new Date(), 'MM/dd/yy'));
  
  const { cuisines } = useSelector(CITYCUISINE_SELECTOR);

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const { cityId, cuisineId, chefId } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;

    dispatch(getChefs(cityId, cuisineId, chefId));
  }, [dispatch, router, isAuthenticated, cuisineId, chefId, cuisines]);

  return (
    <Page title="Search Chef">
      <ChefHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FoodSection selectedCategory={selectedCategory} />
    </Page>
  );
}
