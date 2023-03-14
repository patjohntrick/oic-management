import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { appColors } from './Colors';

export const CardTitle = styled(Typography)({
  fontWeight: '500',
  fontSize: 18,
  color: appColors.oliveBlack,
});

export const CardSubTitle = styled(Typography)({
  fontWeight: '400',
  fontSize: 14,
});
