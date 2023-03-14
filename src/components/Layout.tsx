import React, { ReactNode, useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChurchIcon from '@mui/icons-material/Church';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GamepadIcon from '@mui/icons-material/Gamepad';
import FolderIcon from '@mui/icons-material/Folder';
import SegmentIcon from '@mui/icons-material/Segment';

import { appColors, Strings, LINKS } from '../constants';

const { LOGO, ADD_MEMBER } = Strings;

const linkIcon = [
  <DashboardIcon sx={{ fontSize: 20 }} />,
  <GroupIcon sx={{ fontSize: 20 }} />,
  <VolunteerActivismIcon sx={{ fontSize: 20 }} />,
  <GamepadIcon sx={{ fontSize: 20 }} />,
  <FolderIcon sx={{ fontSize: 20 }} />,
  <SegmentIcon sx={{ fontSize: 20 }} />,
];

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [currentTime, setCurrentTime] = useState('');
  // const windowSize = [window.innerWidth, window.innerHeight];
  const location = useLocation();

  const time = () => {
    const date = new Date().toLocaleTimeString();
    setCurrentTime(date);
  };
  setInterval(time, 1000);

  // console.log('width: ', windowSize[0], 'height: ', windowSize[1]);

  return (
    <Container>
      <Nav>
        <LogoContainer>
          <ChurchIcon sx={{ fontSize: 34, color: appColors.majorelleBlue }} />
          <Logo>{LOGO}</Logo>
        </LogoContainer>
        <IconContainer>
          <AccountCircleIcon
            sx={{ fontSize: 28, color: appColors.majorelleBlue }}
          />
        </IconContainer>
      </Nav>
      <SideBarOuterContainer>
        <SideBarContainer>
          <SideBarInnerContainer>
            <AddBtnContainer>
              <MemberButton>
                <AddBtnText>{ADD_MEMBER}</AddBtnText>
                <AddIcon sx={{ color: appColors.white, fontSize: 20 }} />
              </MemberButton>
            </AddBtnContainer>
            {LINKS.map((val, index) => {
              return (
                <LinkButton key={index}>
                  <StyledButton
                    bgcolor={
                      location.pathname === val.linkTo
                        ? appColors.ghostWhite
                        : undefined
                    }
                  >
                    <Typography
                      sx={{
                        color:
                          val.linkTo === location.pathname
                            ? appColors.majorelleBlue
                            : appColors.oliveBlack,
                      }}
                    >
                      {linkIcon[index]}
                    </Typography>
                    <LinkText>{val.text}</LinkText>
                  </StyledButton>
                </LinkButton>
              );
            })}
          </SideBarInnerContainer>
          <TimeContainer>{currentTime}</TimeContainer>
        </SideBarContainer>
        <ContentContainer>{children}</ContentContainer>
      </SideBarOuterContainer>
    </Container>
  );
};

const Container = styled(Box)({
  backgroundColor: appColors.ghostWhite,
  minHeight: '100vh',
  position: 'relative',
  overflowY: 'hidden',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 60,
});

const Logo = styled(Typography)({
  fontSize: 24,
  fontWeight: '500',
  marginLeft: 5,
  color: appColors.oliveBlack,
});

const Nav = styled(Box)({
  backgroundColor: appColors.white,
  height: '7vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  zIndex: 2,
  width: '100vw',
});

const IconContainer = styled(Box)({
  marginRight: 40,
});

const SideBarOuterContainer = styled(Box)({
  display: 'flex',
  height: '93vh',
  marginTop: '7vh',
});

const SideBarContainer = styled(Box)({
  backgroundColor: appColors.white,
  minWidth: 250,
  position: 'relative',
});

const SideBarInnerContainer = styled(Box)({
  marginTop: 20,
  width: '100%',
  height: 400,
  //   backgroundColor: appColors.mediumAquaMarineGreen,
});

const TimeContainer = styled(Typography)({
  fontSize: 16,
  fontWeight: '500',
  color: appColors.oliveBlack,
  position: 'absolute',
  bottom: 20,
  width: '100%',
  textAlign: 'center',
});

const ContentContainer = styled(Box)({
  minHeight: '100%',
  width: '100%',
  padding: 25,
  // backgroundColor: 'grey',
  overflowY: 'auto',
  // marginLeft: 20,
  // border: '1px solid black',
});

const MemberButton = styled(Box)({
  margin: 'auto',
  width: 200,
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: appColors.majorelleBlue,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 10,
});

const AddBtnContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  // marginTop: -10,
  marginBottom: 20,
});

const AddBtnText = styled(Typography)({
  color: appColors.white,
  marginRight: 10,
});

const LinkButton = styled(Box)({
  display: 'block',
  width: '100%',
  paddingTop: 7,
  paddingBottom: 7,
  // border: '1px solid black',
});

const StyledButton = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: 150,
  margin: 'auto',
  cursor: 'pointer',
  padding: 10,
  paddingLeft: 20,
  borderRadius: 10,
  '&:hover': {
    backgroundColor: appColors.ghostWhite,
  },
});

const LinkText = styled(Typography)({
  color: appColors.oliveBlack,
  marginLeft: 10,
  fontWeight: '500',
  textTransform: 'capitalize',
});
