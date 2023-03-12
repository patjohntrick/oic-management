import React, { ReactNode } from 'react';

import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChurchIcon from '@mui/icons-material/Church';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

import { appColors, Strings, LINKS } from '../constants';

const { LOGO, ADD_MEMBER } = Strings;

const linkIcon = [];

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
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
                <StyledButton>
                  <DashboardIcon
                    sx={{ color: appColors.majorelleBlue, fontSize: 16 }}
                  />
                  <LinkText>{val.text}</LinkText>
                </StyledButton>
              </LinkButton>
            );
          })}
        </SideBarInnerContainer>
      </SideBarContainer>
      {children}
    </Container>
  );
};

const Container = styled(Box)({
  backgroundColor: appColors.ghostWhite,
  minHeight: '100vh',
  position: 'relative',
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
  //   boxShadow: `2px 2px ${appColors.black10}`,
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

const SideBarContainer = styled(Box)({
  backgroundColor: appColors.white,
  minHeight: '100vh',
  width: 250,
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,
});

const SideBarInnerContainer = styled(Box)({
  marginTop: '7vh',
  width: '100%',
  height: 400,
  //   backgroundColor: appColors.mediumAquaMarineGreen,
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
  marginTop: 90,
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
