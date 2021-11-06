import React from 'react';

import {
  DismissButton,
  Wrapper,
  ContentWrapper,
  MessageText,
  DismissButtonText,
  ButtonWrapper,
} from './alert.styles';

export const Alert: React.FC<AlertComponent.Props> = ({
  open,
  onCloseClick,
  message = 'Falha ao executar ação.',
}) => {
  if (!open) return null;

  return (
    <Wrapper>
      <ContentWrapper>
        <MessageText>{message}</MessageText>

        <ButtonWrapper>
          <DismissButton onPress={onCloseClick}>
            <DismissButtonText>Dispensar</DismissButtonText>
          </DismissButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
