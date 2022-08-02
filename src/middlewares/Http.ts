/**
 * Define todos los requisitos en HTTP
 */
import bodyParser from "body-parser";
import { Application } from 'express';
import compress from 'compression';
import Log from "./Log";
import cors from 'cors';

class Http{
  public static mount(_express: Application): Application {
    Log.info('Booting the \'HTTP\' middleware...');

    _express.use(bodyParser.urlencoded({
			limit: '10mb',
			parameterLimit: 3000,
			extended: false
		}));

    // Habilita los CORS
		_express.use(cors());

    // Desactivar la cabecera x-powered-by en la respuesta
		_express.disable('x-powered-by');

    // Activa el validador de la carga útil de la solicitud Activa la compresión "gzip" / "deflate" para la respuesta
		_express.use(compress());

    return _express;
  }
}

export default Http;
