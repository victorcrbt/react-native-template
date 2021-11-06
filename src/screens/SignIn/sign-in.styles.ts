import styled from 'styled-components/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ScreenWrapper } from '@components/ScreenWrapper';
import { BaseButton } from '@components/BaseButton';
import { BaseInput } from '@components/BaseInput';

export const Wrapper = styled(ScreenWrapper)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled(BaseButton)``;

export const LoginIcon = styled(MaterialCommunityIcon).attrs(props => ({
  color: props.theme.colors.primary.default.contrast,
  name: 'login-variant',
  size: 24,
}))``;

export const Input = styled(BaseInput)``;
