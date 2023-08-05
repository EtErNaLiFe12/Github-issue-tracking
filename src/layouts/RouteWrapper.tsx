import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function RouteWrapper(): ReactElement {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
