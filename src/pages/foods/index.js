// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import FoodSection from 'src/sections/search-chef/chef-detail/FoodSection';
import ChefHeader from 'src/sections/search-chef/chef-detail/ChefHeader';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getChefs } from 'src/redux/slices/city';
import { useRouter } from 'next/router';
import LoadingScreen from 'src/components/LoadingScreen';
import { FOOD_SELECTOR, getFoodsByChefToken } from 'src/redux/slices/food';
import FoodDialog from 'src/sections/@dashboard/foods/foodDialog';
import { Box, Button, Grid } from '@mui/material';
// sections

// ----------------------------------------------------------------------

FoodsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function FoodsPage() {
  const [foodDialogIsOpen, setFoodDialogIsOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState();

  const { checkout, foods } = useSelector(FOOD_SELECTOR);

  const { scheduleTime, scheduleDate, cart } = checkout;

  const [selectedTime, setSelectedTime] = useState(scheduleTime);

  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const {chefId } = router.query;

  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [foodsArray, setFoodsArray] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if(foods.length > 0){
      setFoodsArray(foods);
    }
  }, [foods]);

  const [filteredFoodsArray, setFilteredFoodsArray] = useState([]);

  useEffect(() => {
  if (foodsArray) {
      const sumArray = [];
      foodsArray.map((item) => {
      const findFood = sumArray.find((food) => food.title.split('with')[0] === item.title.split('with')[0]);
      if (!findFood) {
          sumArray.push(item);
      }
      });
      setFilteredFoodsArray(sumArray)
  }
  }, [foodsArray]);

  useEffect(() => {
    async function fetch() {
        setIsLoading(true);
        await dispatch(getFoodsByChefToken());
        setIsLoading(false);
    }
    fetch();
  }, [dispatch, router, isAuthenticated, chefId]);

  return loading ? (
  <LoadingScreen inner />
  ) : (
  <Page title="Search Chef">
    {/* <ChefHeader
    setCurrentPage={setCurrentPage}
    setSearchIsLoading={setSearchIsLoading}
    foodsArray={foodsArray}
    setFoodsArray={setFoodsArray}
    selectedDate={selectedDate}
    setSelectedDate={setSelectedDate}
    selectedTime={selectedTime}
    setSelectedTime={setSelectedTime}
  /> */}
    <FoodSection
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      searchIsLoading={false}
      foodsArray={foodsArray}
      filteredFoodsArray={filteredFoodsArray}
      selectedDate={selectedDate}
      selectedTime={selectedTime}
    />
    <FoodDialog open={foodDialogIsOpen} onClose={() => setFoodDialogIsOpen(false)} />
  </Page>
  );
}
