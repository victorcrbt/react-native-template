import React from 'react';

import { Wrapper, Input, ConfirmButton } from './SignIn.styles';

const SignInScreen: React.FC = () => (
  <Wrapper>
    <Input label="email" placeholder="Please, enter your email..." />
    <Input label="password" placeholder="Please, enter your password..." />

    <ConfirmButton>sign in</ConfirmButton>
  </Wrapper>
);

export { SignInScreen };
