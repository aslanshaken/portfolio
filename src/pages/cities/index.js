// layouts
import Layout from '../../layouts';
// components
// sections
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
  }, [router]);

  return (
    null
    // <Page title="Search Chef">
    //   <HeroHeader city="Austin" cuisine="Central Asia cuisine" chef="Michael" />
    //   <ChooseCity />
    // </Page>
  );
}
