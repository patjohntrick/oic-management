import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { CardSubTitle, CardTitle, Strings, appColors } from '../constants';

type StyledSummaryCardProps = {
  title: string;
  memberCard?: boolean;
  donationCard?: boolean;
  activityCard?: boolean;
};

export const StyledSummaryCard = ({ title }: StyledSummaryCardProps) => {
  if (title === Strings.RECENT_DONATIONS) {
    return (
      <Container>
        <TitleCard sx={{ backgroundColor: appColors.crayolaBlue }}>
          {title}
        </TitleCard>
        <CardInnerContainer>
          <MemberContainer>
            <IconContainer></IconContainer>
            <TextContainer>
              <MemberName></MemberName>
              <DepartmentName></DepartmentName>
            </TextContainer>
          </MemberContainer>
        </CardInnerContainer>
      </Container>
    );
  } else if (title === Strings.UPCOMING_ACT) {
    return (
      <Container>
        <TitleCard sx={{ backgroundColor: appColors.pigmentGreen }}>
          {title}
        </TitleCard>
        <CardInnerContainer>
          <MemberContainer>
            <IconContainer></IconContainer>
            <TextContainer>
              <MemberName></MemberName>
              <DepartmentName></DepartmentName>
            </TextContainer>
          </MemberContainer>
        </CardInnerContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <TitleCard sx={{ backgroundColor: appColors.maximumRed }}>
          {title}
        </TitleCard>
        <CardInnerContainer>
          <MemberContainer>
            <IconContainer></IconContainer>
            <TextContainer>
              <MemberName></MemberName>
              <DepartmentName></DepartmentName>
            </TextContainer>
          </MemberContainer>
        </CardInnerContainer>
      </Container>
    );
  }
};

const Container = styled(Box)({
  backgroundColor: appColors.white,
  height: 400,
  borderRadius: 10,
  width: '100%',
  marginRight: 20,
});

const CardInnerContainer = styled(Box)({
  padding: 20,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 15,
});

const TitleCard = styled(CardTitle)({
  paddingLeft: 20,
  paddingTop: 20,
  paddingBottom: 15,
  //   backgroundColor: appColors.maximumRed,
  color: appColors.white,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  fontWeight: '400',
});

const MemberContainer = styled(Box)({
  //   width: 232,
  //   height: 130,
  //   backgroundColor: appColors.majorelleBlue,
  //   borderRadius: 20,
  //   cursor: 'pointer',
});

const IconContainer = styled(Box)({});

const TextContainer = styled(Box)({});

const MemberName = styled(CardTitle)({});

const DepartmentName = styled(CardSubTitle)({});
