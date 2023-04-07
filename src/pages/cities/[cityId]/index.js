// layouts
import Layout from '../../../layouts';
// components
// sections
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
  }, [router]);

  return null;
  // <Page title="Search Chef">
  //   <HeroHeader title="New-York cuisines" topBorder={true} backgroundImage="/assets/search-chef/hero-header.png" />
  //   <ChooseCuisines />
  // </Page>
}
