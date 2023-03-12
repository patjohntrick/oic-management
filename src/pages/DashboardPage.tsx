import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { Layout, StyledContentContainer } from '../components';
import styled from '@emotion/styled';

export const DashboardPage = () => {
  return (
    <Layout>
      <StyledContentContainer>
        <Container></Container>
      </StyledContentContainer>
    </Layout>
  );
};

const Container = styled(Box)({
  // position: 'absolute',
  // top: '7vh',
  // left: '',
  // backgroundColor: 'cyan',
});
