/**
 * Modulo para levantar el servidor Express
 */
import express, { Application } from "express";
import Locals from "./Locals";
import Bootstrap from "../middlewares/Kernel";
import ExceptionHandler from "../exception/Handler";
import Routes from "./Routes";

class Express {
	public express: Application;
	private server: any;
	constructor() {
		this.express = express();

		this.mountDotEnv();
		this.mountMiddlewares();
		this.mountRoutes();
	}

	private mountDotEnv(): void {
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
	private mountRoutes(): void {
		this.express = Routes.mountApi(this.express);
	}

	public init(): any {
		const port: number = Locals.config().port;

		// Registrando excepciones y errores
		this.express.use(ExceptionHandler.clientErrorHandler);
		this.express.use(ExceptionHandler.syntaxErrorHandler);
		this.express.use(ExceptionHandler.errorHandler);
		this.express = ExceptionHandler.notFoundHandler(this.express);

		this.server = this.express
			.listen(port, () => {
				return console.log(
					"\x1b[33m%s\x1b[0m",
					`Server :: Running @ 'http://localhost:${port}'`
				);
			})
			.on("error", (_error) => {
				return console.log("Error: ", _error.message);
			});
	}
	getHTTPServer() {
		return this.server;
	}
	async stop(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.server) {
				this.server.close((error: any) => {
					if (error) {
						return reject(error);
					}
					return resolve();
				});
			}
			return resolve();
		});
	}
}

export default new Express();
