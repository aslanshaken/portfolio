import PropTypes from 'prop-types';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';
import CardHeaderIcon from 'src/components/BackgroundIcon';
import CardHeader from 'src/components/card/CardHeader';

//
export default function DeliverySteps() {
  const STEPS = [
    {
      icon: 'uil:schedule',
      title: 'Delivery Schedule',
      subtitle: 'Tuesday, March 14th',
      time: '3:40 PM - 4 PM',
      buttonText: 'Change',
      onClickButton: () => {},
    },
    {
      icon: 'ic:baseline-payment',
      title: 'Payment',
      subtitle: 'You do not have saved credit cards',
      time: '',
      buttonText: 'Add a new card',
      onClickButton: () => {},
    },
    {
      icon: 'jam:pen',
      title: 'Delivery instructions ',
      subtitle: 'Please lift up on the 7th floor',
      time: '',
      buttonText: 'Change',
      onClickButton: () => {},
    },
  ];

  return (
    <Stack spacing={2}>
      {STEPS.map((step, _i) => (
        <DeliveryStepCard
          key={step.title + _i}
          icon={step.icon}
          title={step.title}
          subtitle={step.subtitle}
          time={step.time}
          buttonText={step.buttonText}
          onClickButton={step.onClickButton}
        />
      ))}
    </Stack>
  );
}

// -------------------------------------------------------------------------------------------

DeliveryStepCard.propTypes = {
  icon: PropTypes.string,
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
