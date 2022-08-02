/**
 * Define todos los requisitos en HTTP
 */
import bodyParser from "body-parser";
import { Application } from 'express';
import compress from 'compression';
import Log from "./Log";
import cors from 'cors';
import helmet from 'helmet';

class Http{
  public static mount(_express: Application): Application {
    Log.info('Booting the \'HTTP\' middleware...');

    _express.use(bodyParser.urlencoded({
			limit: '10mb',
			parameterLimit: 3000,
			extended: false
		}));
    // habilitando el parseo de json
    _express.use(bodyParser.json({
			limit: '10mb'
		}));

    // Seguridad con helmet
    _express.use(helmet.xssFilter());
    _express.use(helmet.noSniff());
    _express.use(helmet.hidePoweredBy());
    _express.use(helmet.frameguard({ action: 'deny' }));
    _express.use(helmet());

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
