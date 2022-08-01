/**
 * Modulo para levantar el servidor Express
 */
import express, { Application} from 'express';
class Express {
  public express: Application;

  constructor() {
    this.express = express();
  }

  public init(): any{
    this.express.listen(3000, () => {
      return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:3000'`);
    }).on('error', (_error) => {
			return console.log('Error: ', _error.message);
		});;
  }
}

export default new Express();
