import styled from 'styled-components/native';

import { ScreenWrapper } from '@components/ScreenWrapper';

export const Wrapper = styled(ScreenWrapper)``;

export const HeaderText = styled.Text`
  ${props => props.theme.typographies.h1}
`;
