import React from 'react';

import { Box } from '@mui/material';
import styled from '@emotion/styled';

import { Layout, StyledCalendar } from '../components';
import { appColors } from '../constants';

export const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <UpperContainer>
          <CalendarContainer>
            <StyledCalendar />
          </CalendarContainer>
          <TotalContainer></TotalContainer>
        </UpperContainer>
        <LowerContainer>
          <MemberSummary></MemberSummary>
          <DonationSummary></DonationSummary>
          <EventsSummary></EventsSummary>
        </LowerContainer>
      </Container>
    </Layout>
  );
};

const Container = styled(Box)({
  minHeight: '95%',
});

const UpperContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

const CalendarContainer = styled(Box)({
  backgroundColor: appColors.white,
  borderRadius: 10,
  height: 350,
  marginRight: 20,
  // width: '60%',
  minWidth: 350,
  overflow: 'hidden',
});

const TotalContainer = styled(Box)({
  backgroundColor: appColors.white,
  height: 350,
  borderRadius: 10,
  width: '100%',
  minWidth: 300,
});

const LowerContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 30,
});

const MemberSummary = styled(Box)({
  backgroundColor: appColors.white,
  height: 400,
  borderRadius: 10,
  width: '100%',
  marginRight: 20,
});

const DonationSummary = styled(Box)({
  backgroundColor: appColors.white,
  height: 400,
  borderRadius: 10,
  width: '100%',
  marginRight: 20,
});

const EventsSummary = styled(Box)({
  backgroundColor: appColors.white,
  height: 400,
  borderRadius: 10,
  width: '100%',
});
