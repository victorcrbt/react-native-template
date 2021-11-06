declare namespace PublicStackNavigator {
  type SignInRoute = Enums.Routes.PublicStackRoutes.SIGN_IN;

  type ParamList = {
    [K in SignInRoute]: undefined;
  };
}
