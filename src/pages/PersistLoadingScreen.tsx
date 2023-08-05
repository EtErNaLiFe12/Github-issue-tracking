import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  GlobalStyles,
  CircularProgress,
  Typography,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export function ProgressBarStyle() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '& .bar': {
            top: 0,
            left: 0,
            height: 2,
            width: '100%',
            position: 'fixed',
            zIndex: theme.zIndex.snackbar,
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 2px ${theme.palette.primary.main}`,
          },
          '& .peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`,
          },
        },
      }}
    />
  );
}

export default function PersistLoadingScreen({
  title,
  hasCloseBtn = false,
  isLoading,
  loadingType,
  ...other
}: any) {
  return (
    <>
      <RootStyle {...other}>
        {hasCloseBtn && (
          <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2 }}>
            <IconButton onClick={() => console.log('close')}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        {title && (
          <Box sx={{ mb: 4 }}>
            <Typography variant={'h1'}>{title}</Typography>
          </Box>
        )}
        <CircularProgress
          color="primary"
          disableShrink
          size={40}
          thickness={4}
        />
      </RootStyle>
    </>
  );
}
