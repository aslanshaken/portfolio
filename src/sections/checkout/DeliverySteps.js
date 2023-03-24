import PropTypes from 'prop-types';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import PaymentDialog from './PaymentDialog';
import { useState } from 'react';
import DeliveryInstructionsPanel from './DeliveryInstructionsPanel';
import DeliverySchedulePanel from './DeliverySchedulePanel';

//
export default function DeliverySteps() {
  const [isOpenPaymentDialog, setIsOpenPaymentDialog] = useState(false);
  const [isOpenDeliverySchedulePanel, setIsOpenDeliverySchedulePanel] = useState(false);
  const [isOpenDeliveryInstructionsPanel, setIsOpenDeliveryInstructionsPanel] = useState(false);

  const STEPS = [
    {
      icon: 'uil:schedule',
      title: 'Delivery Schedule',
      subtitle: 'Tuesday, March 14th',
      time: '3:40 PM - 4 PM',
      buttonText: 'Change',
      onClickButton: () => {
        setIsOpenDeliverySchedulePanel(true);
      },
      status: isOpenDeliverySchedulePanel,
    },
    {
      icon: 'ic:baseline-payment',
      title: 'Payment',
      subtitle: 'You do not have saved credit cards',
      time: '',
      buttonText: 'Add a new card',
      onClickButton: () => {
        setIsOpenPaymentDialog(true);
      },
      status: isOpenPaymentDialog,
    },
    {
      icon: 'jam:pen',
      title: 'Delivery instructions',
      subtitle: 'Please lift up on the 7th floor',
      time: '',
      buttonText: 'Change',
      onClickButton: () => {
        setIsOpenDeliveryInstructionsPanel(true);
      },
      status: isOpenDeliveryInstructionsPanel,
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
                {step.title === 'Delivery Schedule' && (
                  <DeliverySchedulePanel onClose={() => setIsOpenDeliverySchedulePanel(false)} />
                )}
                {step.title === 'Delivery instructions' && (
                  <DeliveryInstructionsPanel
                    onClose={() => {
                      setIsOpenDeliveryInstructionsPanel(false);
                    }}
                  />
                )}
              </>
            ) : (
              <DeliveryStepCard
                icon={step.icon}
                title={step.title}
                subtitle={step.subtitle}
                time={step.time}
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
  time: PropTypes.string,
  buttonText: PropTypes.string,
  onClickButton: PropTypes.func,
};

function DeliveryStepCard({
  icon = '',
  title = '',
  subtitle = '',
  time = '',
  buttonText = 'Change',
  onClickButton = () => {},
}) {
  return (
    <Card>
      <CardHeader icon={icon} title={title} />
      <Stack direction={'row'} px={3} py={2} spacing={2} justifyContent={'space-between'} alignItems={'flex-start'}>
        <Stack>
          <Typography variant="subtitle2" color={'black'} gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="caption" color={'text.secondary'}>
            {time}
          </Typography>
        </Stack>
        <Button variant={'outlined'} color="secondary" onClick={onClickButton}>
          {buttonText}
        </Button>
      </Stack>
    </Card>
  );
}
