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
import { FOOD_SELECTOR, getFoodsByChef } from 'src/redux/slices/food';
import { format } from 'date-fns';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ChefPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChefPage() {
  const [selectedDate, setSelectedDate] = useState();

  const { checkout, foods } = useSelector(FOOD_SELECTOR);

  const { scheduleTime, scheduleDate, cart } = checkout;

  const [searchIsLoading, setSearchIsLoading] = useState(false);

  const [selectedTime, setSelectedTime] = useState(scheduleTime);

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const { cityId, cuisineId, chefId } = router.query;

  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [foodsArray, setFoodsArray] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFoodsArray(foods?.[selectedDate]?.foods);
  }, [foods, selectedDate]);

  const [filteredFoodsArray, setFilteredFoodsArray] = useState([]);

  useEffect(() => {
    if (foodsArray) {
      const sumArray = [];
      foodsArray.map((item) => {
        const findFood = sumArray.find((food) => food.title.split('with')[0] === item.title.split('with')[0]);
        // if (!findFood) {
        sumArray.push(item);
        //
      });
      setFilteredFoodsArray(sumArray);
    }
  }, [foodsArray]);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      await dispatch(getFoodsByChef(cityId, cuisineId, chefId, cart[0]?.user_id == chefId ? scheduleDate : ''));
      setIsLoading(false);
    }

    fetch();
  }, [dispatch, router, isAuthenticated, cuisineId, chefId, cityId]);

  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Search Chef">
      <ChefHeader
        setCurrentPage={setCurrentPage}
        setSearchIsLoading={setSearchIsLoading}
        foodsArray={foodsArray}
        setFoodsArray={setFoodsArray}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <FoodSection
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchIsLoading={searchIsLoading}
        foodsArray={foodsArray}
        filteredFoodsArray={filteredFoodsArray}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </Page>
  );
}
