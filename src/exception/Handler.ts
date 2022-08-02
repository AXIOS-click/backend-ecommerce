
/**
 * Define los manejadores de errores y excepciones
 */
import { Request, Response } from "express";
import Responses from "../providers/Responses";
import Locals from "../providers/Locals";
import Log from "../middlewares/Log";


class Handler {
  /**
	 * Maneja todas las rutas no encontradas
	 */
  public static notFoundHandler(_express: any): any{
    const apiPrefix = Locals.config().api_prefix;

      _express.use('*', (req: Request, res: Response) => {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const responses = new Responses(res);

      Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);

      // if para ver que venga por peticion api
      if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
				return responses.notFound(`Path '${req.originalUrl}' not found`);
			}
    })
    return _express;
  }
  /**
	 * Maneja los errores/excepciones de las rutas api
	 */
  public static clientErrorHandler(err: any, req: Request, res: Response, next: any): any {
		console.log(err.stack);
    const responses = new Responses(res);
		if (req.xhr) {
			return responses.internalServerError('Something went wrong');
		} else {
			return next(err);
		}
  }
  /**
	 * Mostrar la ruta mantenimiento en caso de errores
	 */
  public static errorHandler(err: any, req: Request, res: Response, next: any): any {
    const apiPrefix = Locals.config().apiPrefix;
    const responses = new Responses(res);
		if (req.originalUrl.includes(`/${apiPrefix}/`)) {
      if (err.name && err.name === 'UnauthorizedError') {
				const innerMessage = err.inner && err.inner.message ? err.inner.message : undefined;
				return responses.internalServerError({
					error: [
						'Invalid Token!',
						innerMessage
					]
				});
			}

			return res.json({
				error: err
			});
    }
    return responses.serviceUnavailable({
      error: [
        err.stack
      ]
    });
  }
}

export default Handler;
