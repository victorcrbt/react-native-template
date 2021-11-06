import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';

export const Wrapper = styled(Animated.View)``;

export const Icon = styled(FontAwesomeIcon).attrs(props => ({
  name: 'spinner',
  color: props.color || props.theme.colors.primary.contrast,
}))``;
