import React from 'react';
import { ViewStyle, ColorValue } from 'react-native';

import { Wrapper, ContentWrapper } from './screen-wrapper.styles';

const ScreenWrapper: React.FC<ScreenWrapperComponent.Props> = ({
  children,
  style,
  ...props
}) => {
  let backgroundColor: ColorValue | undefined;

  if (style && Array.isArray(style) && style[0]) {
    const styles = style[0] as ViewStyle;

    backgroundColor = styles.backgroundColor as ColorValue;
  }

  if (style && !Array.isArray(style) && typeof style === 'object') {
    backgroundColor = style.backgroundColor;
  }

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <ContentWrapper {...props} style={style}>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export { ScreenWrapper };
