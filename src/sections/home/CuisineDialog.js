import React from 'react';
import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import Image from 'src/components/Image';
import { useRouter } from 'next/router';
import { closeDialog } from 'src/redux/slices/dialog';
import { useDispatch } from 'react-redux';

const cuisines = [
  { id: 'Ukrainian-cuisine', img: '', name: 'Ukrainian' },
  { id: 'Italian-cuisine', img: '', name: 'Central Asia' },
  { id: 'Japan-cuisine', img: '', name: 'Japan cuisine' },
  { id: 'Italian-cuisine', img: '', name: 'All cakes' },
];

export default function CuisineDialog({ isOpen }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen}>
      <IconButton
        onClick={() => dispatch(closeDialog())}
        width={'fit-content'}
        sx={{ position: 'absolute', right: '0' }}
      >
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={6} color={'black'}>
        <Typography variant="h3">Select cuisine</Typography>
        <Typography mt={2} variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Stack sx={{ width: 'fit-content', mx: 'auto' }} py={4}>
          {/* <IconButton
            color={'secondary'}
            sx={{ border: '1px solid', width: 'fit-content', mx: 'auto', borderRadius: 'full' }}
          >
            <Iconify icon={'material-symbols:keyboard-arrow-up'} width={20} height={20} />
          </IconButton> */}
          {cuisines.map((item, _i) => (
            <Button
              key={_i}
              onClick={() => {
                dispatch(closeDialog());
                router.push('/cities/chicago/ukrainian-cuisine/');
              }}
              direction={'row'}
              sx={{ width: '100%', justifyContent:'left', px:5 }}
            >
              <Image
                src={`/assets/search-chef/cuisines/${item.id}.png`}
                sx={{ width: 100, height: 70 }}
                alt={'cuisine'}
              />
              <Typography variant="subtitle1" color={'black'}>
                {item.name}
              </Typography>
            </Button>
          ))}
          {/* <IconButton
            color={'secondary'}
            sx={{ border: '1px solid', width: 'fit-content', mx: 'auto', borderRadius: 'full' }}
          >
            <Iconify icon={'material-symbols:keyboard-arrow-down'} width={20} height={20} />
          </IconButton> */}
        </Stack>
      </Stack>
    </Dialog>
  );
}
