import PropTypes from 'prop-types';
import { Box, Button, Card, Divider, Grid, Stack, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import PaymentDialog from './PaymentDialog';
import { useState } from 'react';
import NotesPanel from './NotesPanel';
import SchedulePanel from './SchedulePanel';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { parse, format } from 'date-fns';
import { useEffect } from 'react';
import PaymentPanel from './PaymentPanel';

//
export default function DeliverySteps({ address, isPickup }) {
  const [isOpenPaymentDialog, setIsOpenPaymentDialog] = useState(false);
  const [isOpenSchedulePanel, setIsOpenSchedulePanel] = useState(true);
  const [isOpenNotesPanel, setIsOpenNotesPanel] = useState(false);
  const { checkout } = useSelector(FOOD_SELECTOR);
  const selectedDay = checkout?.orderDetail?.items[0]?.selected_day;
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    if (selectedDay) setSelectedDate(format(new Date(selectedDay), 'EEEE, MMM d'));
  }, [selectedDay]);

  const STEPS = [
    {
      icon: 'uil:schedule',
      title: `${isPickup ? 'Pick Up Schedule' : 'Delivery Schedule'}`,
      subtitle: `${selectedDate}`,
      // content: 'Please select time',
      buttonText: '',
      onClickButton: () => {
        setIsOpenSchedulePanel(true);
      },
      status: isOpenSchedulePanel,
    },
    {
      icon: 'ic:baseline-payment',
      title: 'Payment',
      subtitle: '',
      content: (
        <Stack spacing={1}>
          {checkout?.orderDetail?.saved_cards?.map((item) => (
            <Grid container width={'100%'} key={item?.id}>
              <Grid item xs={4}>
                <Typography variant="body1">{item?.brand}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">**** **** **** {item?.last_four}</Typography>
              </Grid>
            </Grid>
          ))}
          <Typography pt={2} variant='caption'>You do not have saved credit cards</Typography>
        </Stack>
      ),
      buttonText: 'Add a new card',
      onClickButton: () => {
        setIsOpenPaymentDialog(true);
      },
      status: isOpenPaymentDialog,
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

      <Stack spacing={2}>
        {STEPS.map((step, _i) => (
          <Box key={step.title + _i}>
            {step.status ? (
              <>
                {step.title === `${isPickup ? 'Pick Up Schedule' : 'Delivery Schedule'}` && (
                  <SchedulePanel
                    subtitle={step.subtitle}
                    isPickup={isPickup}
                    onClose={() => setIsOpenSchedulePanel(false)}
                  />
                )}
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
  content: PropTypes.element,
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
      <Stack direction={'row'} px={3} py={2} spacing={2} justifyContent={'space-between'} alignItems={'flex-start'}>
        <Stack flex={1}>
          <Typography variant="caption" color={'text.secondary'}>
            {content}
          </Typography>
        </Stack>
        {buttonText != '' && (
          <Button variant={'outlined'} color="secondary" onClick={onClickButton}>
            {buttonText}
          </Button>
        )}
      </Stack>
    </Card>
  );
}
