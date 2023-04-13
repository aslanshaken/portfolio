import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { useRouter } from 'next/router';
import { closeDialog } from 'src/redux/slices/dialog';
import axios from 'src/utils/axios';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getCuisines } from 'src/redux/slices/city';
import useAuth from 'src/hooks/useAuth';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

export default function CuisineDialog({ isOpen }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const { cuisines } = useSelector(CITYCUISINE_SELECTOR);

  useEffect(() => {
    dispatch(getCuisines());
  }, []);

  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen}>
      <IconButton
        onClick={() => dispatch(closeDialog())}
        width={'fit-content'}
        sx={{ position: 'absolute', right: '0' }}
      >
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <DialogContent sx={{ p: 0 }}>
        <Stack p={6} color={'black'}>
          <Typography variant="h3">Select cuisine</Typography>
          <Typography mt={2} variant={'body2'}>
            With our diverse range of cuisines, there's something for everyone to enjoy
          </Typography>
          <Stack sx={{ width: 'fit-content', mx: 'auto' }} py={4}>
            {/* <IconButton
            color={'secondary'}
            sx={{ border: '1px solid', width: 'fit-content', mx: 'auto', borderRadius: 'full' }}
          >
            <Iconify icon={'material-symbols:keyboard-arrow-up'} width={20} height={20} />
          </IconButton> */}
            {cuisines?.map((item, _i) => (
              <Button
                key={_i}
                onClick={async () => {
                  await router.push(`/cities/4/${item?.id}/`);
                  dispatch(closeDialog());
                }}
                direction={'row'}
                sx={{ width: '100%', justifyContent: 'left', px: 5 }}
              >
                {item?.image ? (
                  <Image
                    src={item?.image}
                    sx={{
                      borderRadius: (theme) => `${theme.shape.borderRadius}px`,
                      width: 100,
                      height: 70,
                      marginRight: 3,
                    }}
                    alt={'cuisine'}
                  />
                ) : (
                  <Iconify icon={'material-symbols:cookie'} color={'disabled'} sx={{ width: 70, height: 70 }} mr={3} />
                )}
                <Typography variant="subtitle1" color={'black'}>
                  {item?.name}
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
      </DialogContent>
    </Dialog>
  );
}
