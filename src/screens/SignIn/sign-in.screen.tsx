import React, { useState } from 'react';
import { useHookstate } from '@hookstate/core';

import { AuthStore } from '@src/store/auth.store';

import { Alert } from '@components/Alert';

import { Spinner } from '@components/Spinner';
import { Wrapper, Input, ConfirmButton, LoginIcon } from './sign-in.styles';

type State = {
  username: string;
  password: string;
};

const SignInScreen: React.FC = () => {
  const { error, hasError, loading } = useHookstate(AuthStore.state).get();
  const [formState, setFormState] = useState<State>({
    username: '',
    password: '',
  });

  const handleChange = ({
    value,
    fieldName,
  }: {
    value: string;
    fieldName: keyof State;
  }) => {
    setFormState(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <>
      <Wrapper>
        <Input
          label="username"
          placeholder="Please, enter your username..."
          value={formState.username}
          onChangeText={value => handleChange({ value, fieldName: 'username' })}
        />
        <Input
          label="password"
          placeholder="Please, enter your password..."
          value={formState.password}
          onChangeText={value => handleChange({ value, fieldName: 'password' })}
        />

        <ConfirmButton
          icon={loading ? <Spinner /> : <LoginIcon />}
          onPress={() => {
            AuthStore.handleSignIn({
              username: formState.username,
              password: formState.password,
            });
          }}>
          sign in
        </ConfirmButton>
      </Wrapper>

      <Alert
        open={hasError}
        onCloseClick={AuthStore.clearError}
        message={error}
      />
    </>
  );
};

export { SignInScreen };
