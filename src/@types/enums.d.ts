import { AuthStackRoutes, PublicStackRoutes } from '@constants/routes.enum';

declare global {
  namespace Enums {
    namespace Routes {
      export { AuthStackRoutes, PublicStackRoutes };
    }
  }
}
