// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Accordion, AccordionDetails, Grid, AccordionSummary, Divider, Stack, Typography, Button} from '@mui/material';
import { DatePicker } from '@mui/lab';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import Iconify from 'src/components/Iconify';
import { useDispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, getFoodsByChefToken } from 'src/redux/slices/food';
import FoodCartCard from 'src/components/FoodCartCard';
// import AddNewDateDialog from '../../components//AddNewDateDialog';
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
  const { checkout, foods } = useSelector(FOOD_SELECTOR);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const {chefId } = router.query;

  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [foodsArray, setFoodsArray] = useState();
  const [availableDates, setAvailableDates] = useState(['06/07/2023', '06/08/2023', '06/09/2023']);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenNewCartDlg, setIsOpenNewCartDlg] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState();


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

  const handleEditItem = (props) => {
    let data = { ...props };
    if (!data.min_order) {
      data.min_order = 1;
    }
    data.count = cart.find((item) => item?.id === data.id) ? 1 : data.min_order;
    setIsOpenEditDlg(true);
    setSelectedItemData(data);
  }

  const handleAddDate = () => {
    setAvailableDates((prevDates) => [...prevDates, '']); // Add an empty string as a new date
  };

  const handleRemoveDate = (index) => {
    setAvailableDates((prevDates) => prevDates.filter((_, i) => i !== index));
  };

  return (
    <Page title="Personal Account : Dashboard">
      <Stack gap={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">Available dates</Typography>
          <Button
            onClick={handleAddDate}
            variant='contained'
          >
            Add New Date
          </Button>
        </Stack>

        <Stack direction="row" spacing={1}>
          {availableDates.map((date, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                borderRadius: '4px',
                background: 'lightGray',
                margin: '10px'
              }}
            >
              <Typography variant="subtitle1">{date}</Typography>
              <button onClick={() => handleRemoveDate(index)}>
                <Iconify icon={'ant-design:close'} />
              </button>
            </div>
          ))}
          
        </Stack>
        
        <Divider />
        {availableDates.map((date, index) => (
          <Accordion 
            key={index}
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
                  <Iconify icon={'material-symbols:keyboard-arrow-down'} sx={{ width: '40px', height: '40px'}} />
                </div>
              }
            >
              <Typography sx={{ m: 'auto' }} textAlign={'center'} variant="subtitle1">
                { date }
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
              <Grid container spacing={4}>
                { filteredFoodsArray?.slice(0, 4).map((item) => (
                  <Grid key={item?.id} item lg={3} md={4} sm={6} xs={12} width={1}>
                    <FoodCartCard
                      data={item}
                      name={item?.title}
                      cover={item?.image_url}
                      price={item?.current_price}
                      min_order={item?.min_order}
                      we_kc={`${item?.gram} gr / ${item?.kc} kc`}
                      quantity={item?.quantity}
                      measurement={item?.measurement}
                      setIsOpenNewCartDlg={setIsOpenNewCartDlg}
                      handleEditItem={() => handleEditItem(item)}
                      setSelectedItemData={setSelectedItemData}
                      onClick={() => handleClickItem(item)}
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
