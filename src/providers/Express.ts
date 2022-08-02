/**
 * Modulo para levantar el servidor Express
 */
import express, { Application} from 'express';
import Locals from "./Locals";
import Bootstrap from '../middlewares/Kernel';
import ExceptionHandler from "../exception/Handler";
import Routes from "./Routes";

class Express {
  public express: Application;

  constructor() {
    this.express = express();

    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  private mountDotEnv (): void {
		this.express = Locals.init(this.express);
	}

  /**
	 * Monta todos los middlewares definidos
	 */
  private mountMiddlewares(): void {
    this.express = Bootstrap.init(this.express);
  }

  /**
	 * Monta todas las rutas
	 */
	private mountRoutes (): void {
		this.express = Routes.mountApi(this.express);
	}

  public init(): any{
    const port: number = Locals.config().port;

    // Registrando excepciones y errores
    this.express.use(ExceptionHandler.clientErrorHandler);
    this.express.use(ExceptionHandler.errorHandler);
    this.express.use(ExceptionHandler.syntaxErrorHandler);
    this.express = ExceptionHandler.notFoundHandler(this.express);

    this.express.listen(port, () => {
      return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
    }).on('error', (_error) => {
			return console.log('Error: ', _error.message);
		});
  }
}

export default new Express();
