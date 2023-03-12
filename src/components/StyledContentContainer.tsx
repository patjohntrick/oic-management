import React from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Container>{children}</Container>;
};

const Container = styled(Box)({
  // backgroundColor: 'red',
  // position: 'absolute',
  // top: '7vh',
  // minHeight: '93vh',
  // width: '82vw',
  // paddingLeft: 280,
  // paddingTop: 20,
  // paddingRight: 20,
  // paddingBottom: 20,
});
