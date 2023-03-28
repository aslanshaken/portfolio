import PropTypes from 'prop-types';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import PaymentDialog from './PaymentDialog';
import { useState } from 'react';
import NotesPanel from './NotesPanel';
import SchedulePanel from './SchedulePanel';

//
export default function DeliverySteps({address, isPickup}) {
  const [isOpenPaymentDialog, setIsOpenPaymentDialog] = useState(false);
  const [isOpenSchedulePanel, setIsOpenSchedulePanel] = useState(false);
  const [isOpenNotesPanel, setIsOpenNotesPanel] = useState(false);

  const STEPS = [
    {
      icon: 'uil:schedule',
      title: `${isPickup ? 'Pick Up Schedule' : 'Delivery Schedule'}`,
      subtitle: 'Tuesday, March 14th',
      content: 'Please select time',
      buttonText: 'Change',
      onClickButton: () => {
        setIsOpenSchedulePanel(true);
      },
      status: isOpenSchedulePanel,
    },
    {
      icon: 'ic:baseline-payment',
      title: 'Payment',
      subtitle: 'You do not have saved credit cards',
      content: '',
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
      content: `Is there anything else you'd like us to know about ?`,
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
                  <SchedulePanel isPickup={isPickup} onClose={() => setIsOpenSchedulePanel(false)} />
                )}
                {step.title === 'Notes' && (
                  <NotesPanel
                    isPickup={isPickup}
                    data={address}
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
  content: PropTypes.string,
  buttonText: PropTypes.string,
  onClickButton: PropTypes.func,
};

function DeliveryStepCard({
  icon = '',
  title = '',
  subtitle = '',
  content = '',
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
            {content}
          </Typography>
        </Stack>
        <Button variant={'outlined'} color="secondary" onClick={onClickButton}>
          {buttonText}
        </Button>
      </Stack>
    </Card>
  );
}
