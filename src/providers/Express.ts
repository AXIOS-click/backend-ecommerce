/**
 * Modulo para levantar el servidor Express
 */
import express, { Application} from 'express';
import Locals from "./Locals";
import ExceptionHandler from "../exception/Handler";

class Express {
  public express: Application;

  constructor() {
    this.express = express();
  }

  public init(): any{
    const port: number = Locals.config().port;

    // Registrando excepciones y errores
    this.express = ExceptionHandler.notFoundHandler(this.express);

    this.express.listen(port, () => {
      return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
    }).on('error', (_error) => {
			return console.log('Error: ', _error.message);
		});
  }
}

export default new Express();
