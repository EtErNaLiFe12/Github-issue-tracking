import { Box } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        zIndex: 9999,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>Loading~</span>
    </Box>
  );
}
