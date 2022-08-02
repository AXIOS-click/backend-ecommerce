
/**
 * Define los manejadores de errores y excepciones
 */
import { Request, Response } from "express";
import Locals from "../providers/Locals";

class Handler {
  public static notFoundHandler(_express: any): any{
    const apiPrefix = Locals.config().api_prefix;

    _express.use('*', (req: Request, res: Response) => {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

      console.log(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);

      if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
				return res.json({
					error: 'Page Not Found'
				});
			} else {
				res.status(404);
				return res.render('pages/error', {
					title: 'Page Not Found',
					error: []
				});
			}
    })
    return _express;
  }
}
export default Handler;
