declare namespace AuthStackNavigator {
  type MainRoute = Enums.Routes.AuthStackRoutes.MAIN;

  type ParamList = {
    [K in MainRoute]: undefined;
  };
}
