declare namespace SignInScreen {
  type FormState = {
    username: string;
    password: string;
  };

  type HandleChangeFunctionParams = {
    value: string;
    fieldName: keyof FormState;
  };
}
