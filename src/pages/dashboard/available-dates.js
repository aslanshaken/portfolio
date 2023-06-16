// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Accordion, AccordionDetails, Grid, AccordionSummary, Divider, Stack, Typography, Button} from '@mui/material';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import Iconify from 'src/components/Iconify';
import { useDispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, getChefAvailableDates, getFoodsByChefToken, removeFoodItem, startReloading, removeAvailableDate } from 'src/redux/slices/food';
import DateFoodCartCard from 'src/components/DateFoodCartCard';
import AddNewDateDialog from 'src/sections/search-chef/chef-detail/AddNewDateDialog';
import LoadingScreen from 'src/components/LoadingScreen';
// sections

// ----------------------------------------------------------------------

AvailableDatesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AvailableDatesPage() {
  const [expanded, setExpanded] = useState(0);
  const handleChange = (index, status) => {
    if (status) setExpanded(index);
    else setExpanded(0);
  };
  const { availableDates: dates, foods, reloading } = useSelector(FOOD_SELECTOR);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const {chefId } = router.query;

  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [foodsArray, setFoodsArray] = useState();
  const [isOpenDateDlg, setIsOpenDateDlg] = useState(false);
  const [availableDates, setAvailableDates] = useState(false);


  useEffect(() => {
    if(Object.keys(dates).length > 0){
      setAvailableDates(dates);
    }
  }, [dates]);

  useEffect(() => {
    async function fetch() {
        setIsLoading(true);
        await dispatch(getChefAvailableDates());
        setIsLoading(false);
    }
    fetch();
  }, [dispatch, router, isAuthenticated, reloading]);

  useEffect(() => {
    async function fetch() {
        setIsLoading(true);
        await dispatch(getFoodsByChefToken());
        setIsLoading(false);
    }
    fetch();
  }, [dispatch, router, isAuthenticated, chefId]);

  useEffect(() => {
    if(foods.length > 0){
      setFoodsArray(foods);
    }
  }, [foods]);

  const handleRemoveItem = async (item) => {
    try{
      await dispatch(removeFoodItem(item.id, item.av_id))
      dispatch(startReloading());
    } catch(error) {
      console.log('error', error)
    }
  }

  const handleRemoveDate = async (date) => {
    try{
      await dispatch(removeAvailableDate(dates[date].ids))
      dispatch(startReloading());
    } catch(error) {
      console.log('error', error)
    }
  }

  const handleAddNewDate = () => {
    setIsOpenDateDlg(true);
  };


  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Personal Account : Dashboard">
      <Stack gap={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">Available dates</Typography>
          <Button onClick={handleAddNewDate} variant="contained">
            Add New Date
          </Button>
          <AddNewDateDialog
            open={isOpenDateDlg}
            onClose={() => setIsOpenDateDlg(false)}
            foodsarray={foodsArray}
          />
        </Stack>
        <Grid container spacing={4}>
          {Object.keys(availableDates).map((date) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={date}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '8px',
                  borderRadius: '4px',
                  background: 'lightGray'
                }}
              >
                <Typography variant="subtitle1">{date}</Typography>
                <button
                  onClick={() => handleRemoveDate(date)}
                >
                  <Iconify icon={'ant-design:close'} />
                </button>
              </div>
            </Grid>
          ))}
        </Grid>
        <Divider />
        {Object.entries(availableDates).map((date, index) => (
          <Accordion
            key={`${date}-${index}`}
            onChange={(ev, status) => handleChange(1, status)}
            sx={{ background: 'transparent' }}
          >
            <AccordionSummary
              sx={{
                background: 'lightGray',
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                borderRadius: '4px',
              }}
              expandIcon={
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px',
                    border: '1px solid black', // Add border style here
                  }}
                >
                  <Iconify icon={'material-symbols:keyboard-arrow-down'} sx={{ width: '40px', height: '40px' }} />
                </div>
              }
            >
              <Typography sx={{ m: 'auto' }} textAlign={'center'} variant="subtitle1">
                {date[0]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <Grid container spacing={4}>
                  {date[1]?.foods.map((item, index) => (
                    <Grid key={index} item lg={3} md={4} sm={6} xs={12} width={1}>
                      <DateFoodCartCard
                        data={item}
                        name={item?.title}
                        cover={item?.image_url}
                        price={item?.current_price}
                        min_order={item?.min_order}
                        we_kc={`${item?.gram} gr / ${item?.kc} kc`}
                        quantity={item?.quantity}
                        measurement={item?.measurement}
                        handleRemoveItem={() => handleRemoveItem(item)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Page>
  );
  
}
