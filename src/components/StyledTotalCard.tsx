import React, { ReactNode } from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { CardSubTitle, CardTitle, Strings, appColors } from '../constants';

type StyledTotalCardProps = {
  text: string;
  icon: ReactNode;
  count: number;
  end?: boolean;
  iconBgColor?: string;
};

export const StyledTotalCard = ({
  text,
  icon,
  count,
  end,
  iconBgColor,
}: StyledTotalCardProps) => {
  return (
    <Container sx={{ marginRight: end !== undefined ? undefined : 2.5 }}>
      <IconContainer sx={{ backgroundColor: iconBgColor && iconBgColor }}>
        {icon}
      </IconContainer>
      <TextContainer>
        <CardTitle>{`Total ${text}`}</CardTitle>
        <CardSubTitle>{`${
          text !== Strings.FUNDS ? count : `P ${count}`
        }`}</CardSubTitle>
      </TextContainer>
    </Container>
  );
};

const Container = styled(Box)({
  display: 'flex',
  //   justifyContent: 'flex-start',
  alignItems: 'center',
  //   border: '1px solid black',
  width: '25%',
  height: 100,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 10,
  backgroundColor: appColors.white,
});

const IconContainer = styled(Box)({
  borderRadius: 100,
  marginRight: 10,
  //   backgroundColor: appColors.ghostWhite,
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const TextContainer = styled(Box)({});
