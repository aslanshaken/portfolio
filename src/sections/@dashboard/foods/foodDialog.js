import { CircularProgress, Dialog, DialogContent, IconButton, Stack } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Iconify from 'src/components/Iconify';
import { UploadAvatar } from 'src/components/upload';
import useNotify from 'src/hooks/useNotify';

export default function FoodDialog({ ...other }) {
  const { errorAlert } = useNotify();
  const [uploadIsLoading, setUploadIsLoading] = useState(false);
  const [foodImageUrl, setFoodImageUrl] = useState();

  const handleDropAvatar = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    try {
      setUploadIsLoading(true);
      const formData = new FormData();
      formData.append('image', file);

      setUploadIsLoading(false);
      // successAlert(response.data.success);

      setFoodImageUrl(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    } catch (error) {
      errorAlert(error.message);
    }
  }, []);

  return (
    <Dialog maxWidth="sm" fullWidth {...other}>
      <DialogContent>
        <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: 0, top: 0 }}>
          <Iconify icon={'iconoir:cancel'} />
        </IconButton>
        <Stack>
          <UploadAvatar
            accept="image/*"
            file={''}
            onDrop={handleDropAvatar}
            {...(uploadIsLoading && { sx: { opacity: 0.5 } })}
          />
          {uploadIsLoading && (
            <CircularProgress
              sx={{ position: 'absolute', top: 'calc(50% - 20px)', left: 'calc(50% - 20px)' }}
              size={40}
            />
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
