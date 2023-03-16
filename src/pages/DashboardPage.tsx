import React from 'react';

import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import SavingsIcon from '@mui/icons-material/Savings';
import SpaIcon from '@mui/icons-material/Spa';
import GradingIcon from '@mui/icons-material/Grading';

import {
  Layout,
  StyledCalendar,
  StyledSummaryCard,
  StyledTotalCard,
} from '../components';
import { appColors, CardSubTitle, CardTitle, Strings } from '../constants';

const {
  ACTIVITIES,
  FUNDS,
  MEMBERS,
  OTHER_DONATIONS,
  NEW_MEMBER,
  RECENT_DONATIONS,
  UPCOMING_ACT,
  COMPLETED_ACT,
} = Strings;

export const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <UpperContainer>
          <CalendarContainer>
            <StyledCalendar />
          </CalendarContainer>
          <WeatherContainer>
            <TempContainer>
              <Box>
                <TempAlertText>Today's temperature</TempAlertText>
                <TempValueText>{`27 °C`}</TempValueText>
              </Box>
            </TempContainer>
            <ForeCastContainer></ForeCastContainer>
          </WeatherContainer>
          <TotalContainer>
            {/* this is supposed to be map based on the database */}
            <StyledTotalCard
              text={MEMBERS}
              count={376}
              icon={<GroupIcon sx={{ color: '#dc2626' }} />}
              iconBgColor={'#fee2e2'}
            />

            <StyledTotalCard
              text={FUNDS}
              count={234534}
              icon={<SavingsIcon sx={{ color: '#ca8a04' }} />}
              iconBgColor='#fef9c3'
            />
            <StyledTotalCard
              text={ACTIVITIES}
              count={26}
              icon={<GradingIcon sx={{ color: '#16a34a' }} />}
              iconBgColor='#dcfce7'
            />
            <StyledTotalCard
              text={OTHER_DONATIONS}
              count={108}
              icon={<SpaIcon sx={{ color: '#2563eb' }} />}
              iconBgColor='#e0f2fe'
              end
            />
          </TotalContainer>
        </UpperContainer>
        <LowerContainer>
          <StyledSummaryCard title={NEW_MEMBER} />
          <StyledSummaryCard title={RECENT_DONATIONS} />
          <StyledSummaryCard title={UPCOMING_ACT} />
          {/* <EventsSummary></EventsSummary> */}
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

const WeatherContainer = styled(Box)({
  // backgroundColor: appColors.white,
  borderRadius: 10,
  minWidth: 300,
  height: 350,
  marginRight: 20,
});

const TempContainer = styled(Box)({
  width: '100%',
  borderRadius: 10,
  backgroundColor: appColors.majorelleBlue,
  height: 100,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  // padding: 20,
  // paddingLeft: 20,
});

const TempAlertText = styled(Typography)({
  color: appColors.white,
  paddingLeft: 20,
  lineHeight: 1,
  fontSize: 12,
  paddingTop: 5,
});

const TempValueText = styled(Typography)({
  color: appColors.white,
  paddingLeft: 20,
  fontSize: 30,
});

const ForeCastContainer = styled(Box)({
  width: '100%',
  borderRadius: 10,
  backgroundColor: appColors.white,
  height: 230,
});

const TotalContainer = styled(Box)({
  // backgroundColor: appColors.white,
  height: 350,
  borderRadius: 10,
  width: '100%',
  // minWidth: 300,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
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
