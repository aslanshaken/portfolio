// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import ChooseChef from '../../../../sections/search-chef/ChooseChef';
import HeroHeader from '../../../../components/HeroHeader';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getAllChefs, getChefs, getCity } from 'src/redux/slices/city';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
import LoadingScreen from 'src/components/LoadingScreen';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ChefListPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChefListPage() {
  const { cuisine, error } = useSelector(CITYCUISINE_SELECTOR);

  const [loading, SetIsLoading] = useState(true);

  const router = useRouter();

  const dispatch = useDispatch();

  const { cityId, cuisineId } = router.query;

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    async function fetch() {
      SetIsLoading(true);
      await dispatch(getChefs(cityId, cuisineId));
      SetIsLoading(false);
      // dispatch(getCity(router.query.cityId));
    }
    fetch();
  }, [cityId, cuisineId]);

  useEffect(() => {
    if (error?.status == 404) {
      router.push('/404');
    }
  }, [error?.status, router]);

  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Search Chef">
      {/* <HeroHeader loading={loading} backgroundImage={cuisine?.image} city="Austin" cuisine={cuisine?.name} /> */}
      <ChooseChef />
    </Page>
  );
}
