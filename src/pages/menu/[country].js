// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import MenuHero from '../../sections/menu/MenuHero';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

Menupage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

const MOCK_DATA = {
  japan: {
    cuisineName: '',
    img: '/assets/menu/hero_bg.png',
    title: 'Japan Cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  italian: {
    cuisineName: '',
    img: '/assets/menu/hero_bg.png',
    title: 'Italian Cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
};

export default function Menupage() {
  const router = useRouter();
  const country = router.query?.country;

  const data = MOCK_DATA[country];

  return (
    <Page title="Menu">
      <MenuHero title={data ? data?.title : "No Data"} image={data?.img} />
    </Page>
  );
}
