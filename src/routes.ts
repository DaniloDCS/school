import { Router } from "express";
import { rules } from "./database/rules";

import AuthenticateRoutes from "./routes/authenticate.routes";
import GeneralRoutes from "./routes/geral.routes";
import AdministrationRoutes from "./routes/admin.routes";
import AppsRoutes from "./routes/apps.routes";
import SchoolRoutes from "./routes/school.routes";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void { 
    this.router.use(AuthenticateRoutes);
    this.router.use(GeneralRoutes);    
    this.router.use('/admin', rules.auth, rules.admin, AdministrationRoutes);
    this.router.use('/apps', rules.auth, AppsRoutes);
    this.router.use('/school', rules.auth, SchoolRoutes);
  }
}

export default new Routes().router;
