// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import ChooseCity from '../../sections/search-chef/ChooseCity';
import HeroHeader from '../../components/HeroHeader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CitiesPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CitiesPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/404');
  }, []);

  return (
    null
    // <Page title="Search Chef">
    //   <HeroHeader city="Austin" cuisine="Central Asia cuisine" chef="Michael" />
    //   <ChooseCity />
    // </Page>
  );
}
