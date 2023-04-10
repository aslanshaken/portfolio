import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { Badge, CircularProgress, Stack, styled, Typography } from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import { UploadAvatar } from 'src/components/upload';
import useNotify from 'src/hooks/useNotify';
import axios from 'src/utils/axios';

//

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    width: 15,
    height: 15,
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    top: 'auto',
    '&::after': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

//
export default function Profile() {
  const { successAlert, errorAlert } = useNotify();

  const [isLoading, setIsLoading] = useState(false);

  const { user, updateAvatar } = useAuth();

  const [avatarUrl, setAvatarUrl] = useState(user.image);

  const handleDropAvatar = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post(`/api/${process.env.API_VERSION}/users/upload_image`, formData);
      const avatar = response.data?.image?.url || null;

      updateAvatar(avatar);
      setIsLoading(false);
      successAlert(response.data.success);

      setAvatarUrl(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    } catch (error) {
      errorAlert(error.message);
    }
  }, []);

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={3}>
      <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
        <UploadAvatar
          accept="image/*"
          file={avatarUrl}
          onDrop={handleDropAvatar}
          {...(isLoading && { sx: { opacity: 0.5 } })}
        />
        {isLoading && (
          <CircularProgress
            sx={{ position: 'absolute', top: 'calc(50% - 20px)', left: 'calc(50% - 20px)' }}
            size={40}
          />
        )}
      </StyledBadge>

      <Stack>
        <Typography variant="h3" gutterBottom>
          Hello {user?.user?.first_name}!
        </Typography>
        <Typography variant="body1" fontStyle={'italic'} color="text.secondary">
          {user?.user?.email}
        </Typography>
      </Stack>
    </Stack>
  );
}
