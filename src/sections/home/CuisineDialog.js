import React, { useEffect } from 'react';
import { Box, Button, Dialog, DialogContent, Divider, IconButton, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { useRouter } from 'next/router';
import { closeDialog } from 'src/redux/slices/dialog';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getCuisines } from 'src/redux/slices/city';
import NextImage from 'next/image';

// ----------------------------------------------------------------------

export default function CuisineDialog({ isOpen }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const { cuisines } = useSelector(CITYCUISINE_SELECTOR);

  useEffect(() => {
    if (isOpen) {
      dispatch(getCuisines());
    }
  }, [dispatch, isOpen]);

  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen} onClose={() => dispatch(closeDialog())}>
      <DialogContent sx={{ p: 0 }}>
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
            With our diverse range of cuisines, there's something for everyone to enjoy
          </Typography>
          <Stack sx={{ width: '100%' }} py={4} gap={1}>
            {/* <IconButton
            color={'secondary'}
            sx={{ border: '1px solid', width: 'fit-content', mx: 'auto', borderRadius: 'full' }}
          >
            <Iconify icon={'material-symbols:keyboard-arrow-up'} width={20} height={20} />
          </IconButton> */}
            {[cuisines?.find((item) => item?.id === 7), ...(cuisines?.filter((item) => item?.id !== 7) || [])]?.map(
              (item, _i) => (
                <>
                  {_i == 1 && <Divider sx={{ my: 1, width: '100%' }} />}
                  <Button
                    key={_i}
                    onClick={async () => {
                      await router.push(`/cities/4/${item?.id}/`);
                      dispatch(closeDialog());
                    }}
                    direction={'row'}
                    sx={{
                      width: 'fit-content',
                      minWidth: 300,
                      justifyContent: 'left',
                      mx: 'auto',
                      px: { sm: 5 },
                    }}
                  >
                    {item?.image ? (
                      <>
                        <Box
                          sx={{
                            minWidth: 70,
                            height: 70,
                            marginRight: 3,
                            borderRadius: '100%',
                            overflow: 'hidden',
                            position: 'relative',
                          }}
                        >
                          <NextImage
                            alt={'cuisine'}
                            src={item?.image}
                            layout="fill"
                            quality={5}
                            priority
                            objectFit="cover"
                          />
                        </Box>
                      </>
                    ) : (
                      <Iconify
                        icon={'material-symbols:cookie'}
                        color={'disabled'}
                        sx={{ width: 70, height: 70 }}
                        mr={3}
                      />
                    )}
                    <Typography variant="subtitle1" color={'black'}>
                      {item?.name}
                    </Typography>
                  </Button>
                </>
              )
            )}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
