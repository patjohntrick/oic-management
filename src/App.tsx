import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';

import { router } from './pages';

function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
