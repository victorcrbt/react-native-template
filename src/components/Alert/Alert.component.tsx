import React from 'react';

import {
  DismissButton,
  Wrapper,
  ContentWrapper,
  MessageText,
  DismissButtonText,
  ButtonWrapper,
} from './Alert.styles';

type Props = {
  open: boolean;
  onCloseClick(): void;
  message: string | null;
};

export const Alert: React.FC<Props> = ({
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
