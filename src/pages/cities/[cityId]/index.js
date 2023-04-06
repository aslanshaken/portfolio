// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
// sections
import ChooseCuisines from '../../../sections/search-chef/ChooseCuisines';
import HeroHeader from '../../../components/HeroHeader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CityPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CityPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/404');
  }, []);

  return null;
  // <Page title="Search Chef">
  //   <HeroHeader title="New-York cuisines" topBorder={true} backgroundImage="/assets/search-chef/hero-header.png" />
  //   <ChooseCuisines />
  // </Page>
}
