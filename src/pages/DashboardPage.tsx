import React from 'react';

import { Box } from '@mui/material';
import styled from '@emotion/styled';

import { Layout } from '../components';
import { appColors } from '../constants';

export const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <CalendarContainer></CalendarContainer>
        <TotalContainer></TotalContainer>
      </Container>
    </Layout>
  );
};

const Container = styled(Box)({
  minHeight: '95%',
  display: 'flex',
  justifyContent: 'space-between',
});

const CalendarContainer = styled(Box)({
  backgroundColor: appColors.white,
  borderRadius: 10,
  height: 350,
  marginRight: 20,
  width: '50%',
  minWidth: 200,
});

const TotalContainer = styled(Box)({
  backgroundColor: appColors.white,
  height: 350,
  borderRadius: 10,
  width: '100%',
  minWidth: 300,
});
