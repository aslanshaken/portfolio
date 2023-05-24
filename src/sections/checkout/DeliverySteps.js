import PropTypes from 'prop-types';
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import PaymentDialog from './PaymentDialog';
import { useState } from 'react';
import NotesPanel from './NotesPanel';
import ScheduleDialog from './ScheduleDialog';
import { useDispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, deleteCard, getSavedCards } from 'src/redux/slices/food';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { IconButtonAnimate } from 'src/components/animate';
import Iconify from 'src/components/Iconify';
import useNotify from 'src/hooks/useNotify';

//
export default function DeliverySteps({ address, isPickup }) {
  const [isOpenPaymentDialog, setIsOpenPaymentDialog] = useState(false);
  const [isOpenScheduleDialog, setIsOpenScheduleDialog] = useState(false);
  const [isOpenNotesPanel, setIsOpenNotesPanel] = useState(false);
  const { checkout, savedCards } = useSelector(FOOD_SELECTOR);
  const scheduleTime = checkout?.orderDetail?.schedule_time;
  const selectedDay = checkout?.scheduleDate;
  const [selectedDate, setSelectedDate] = useState();
  const dispatch = useDispatch();
  const { errorAlert } = useNotify();

  const deletePayment = async () => {
    try {
      const response = await dispatch(deleteCard());
      dispatch(getSavedCards());
      // successAlert(response.data.success);
    } catch (error) {
      errorAlert(error.message);
    }
  };

  useEffect(() => {
    dispatch(getSavedCards());
  }, [dispatch]);

  useEffect(() => {
    if (selectedDay) setSelectedDate(format(new Date(selectedDay), 'EEEE, MMM d'));
  }, [selectedDay]);

  const STEPS = [
    {
      icon: 'uil:schedule',
      title: `${isPickup ? 'Pick up schedule' : 'Delivery schedule'}`,
      subtitle: `${selectedDate ?? ''}`,
      content: scheduleTime ?? '',
      buttonText: 'Select a time',
      onClickButton: () => {
        setIsOpenScheduleDialog(true);
      },
      status: false,
    },
    {
      icon: 'ic:baseline-payment',
      title: 'Payment',
      subtitle: '',
      content: (
        <Stack spacing={1}>
          {savedCards ? (
            savedCards?.map((item) => (
              <Grid container width={'100%'} key={item?.id} whiteSpace={'nowrap'} alignItems={'center'}>
                <Grid item xs={4}>
                  <Typography variant="caption" color={'secondary'}>
                    {item?.brand}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>**** **** **** {item?.last_four}</Box>
                    <IconButtonAnimate color="error" onClick={deletePayment}>
                      <Iconify icon={'mdi:trash'} />
                    </IconButtonAnimate>
                  </Stack>
                </Grid>
              </Grid>
            ))
          ) : (
            <Typography pt={2} variant="caption">
              You do not have saved credit cards
            </Typography>
          )}
        </Stack>
      ),
      buttonText: savedCards?.length === 0 && 'Add a new card',
      onClickButton: () => {
        setIsOpenPaymentDialog(true);
      },
      status: false,
    },
    {
      icon: 'jam:pen',
      title: 'Notes',
      subtitle: '',
      content: ` ${
        checkout?.orderDetail?.delivery_instructions ?? `Is there anything else you'd like us to know about ?`
      }`,
      buttonText: 'Change',
      onClickButton: () => {
        setIsOpenNotesPanel(true);
      },
      status: isOpenNotesPanel,
    },
  ];

  return (
    <>
      <PaymentDialog open={isOpenPaymentDialog} onClose={() => setIsOpenPaymentDialog(false)} />
      <ScheduleDialog open={isOpenScheduleDialog} onClose={() => setIsOpenScheduleDialog(false)} isPickup={isPickup} />

      <Stack spacing={2}>
        {STEPS.map((step, _i) => (
          <Box key={step.title + _i}>
            {step.status ? (
              <>
                {step.title === 'Notes' && (
                  <NotesPanel
                    isPickup={isPickup}
                    onClose={() => {
                      setIsOpenNotesPanel(false);
                    }}
                  />
                )}
              </>
            ) : (
              <DeliveryStepCard
                icon={step.icon}
                title={step.title}
                subtitle={step.subtitle}
                content={step.content}
                buttonText={step.buttonText}
                onClickButton={step.onClickButton}
              />
            )}
          </Box>
        ))}
      </Stack>
    </>
  );
}

// -------------------------------------------------------------------------------------------

DeliveryStepCard.propTypes = {
  icon: PropTypes.string || PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.any,
  buttonText: PropTypes.string,
  onClickButton: PropTypes.func,
};

function DeliveryStepCard({
  icon = '',
  title = '',
  subtitle = '',
  content = '',
  buttonText = '',
  onClickButton = () => {},
}) {
  return (
    <Card>
      <CardHeader icon={icon} title={title} subtitle={subtitle} />
      <Stack
        direction={'row'}
        px={3}
        py={2}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        flexWrap={'wrap'}
        gap={2}
      >
        <Box flex={1}>
          <Typography variant="caption" color={'text.secondary'}>
            {content}
          </Typography>
        </Box>
        {buttonText != '' && (
          <Button variant={'outlined'} color="secondary" onClick={onClickButton} sx={{ textTransform: 'none' }}>
            {buttonText}
          </Button>
        )}
      </Stack>
    </Card>
  );
}
