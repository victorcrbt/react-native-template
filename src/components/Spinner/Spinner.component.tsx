import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { Wrapper, Icon } from './spinner.styles';

type Props = {
  color?: string;
  size?: number;
};

export const Spinner: React.FC<Props> = ({ color, size = 24 }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const startSpinningAnimation = useCallback(
    () =>
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
          easing: Easing.linear,
        })
      ).start(),
    []
  );

  useEffect(() => {
    startSpinningAnimation();
  }, [startSpinningAnimation]);

  return (
    <Wrapper
      style={{
        transform: [
          {
            rotate: spinValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}>
      <Icon color={color} size={size} />
    </Wrapper>
  );
};
