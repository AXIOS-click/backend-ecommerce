import { Application } from 'express';
import Log from "../middlewares/Log";
import Locals from './Locals';

import apiRouter from '../routes/Api';

class Routes {
  public mountApi(_express: Application): Application {
    const api_prefix = Locals.config().api_prefix;
		Log.info('Routes :: Mounting API Routes...');
		return _express.use(`/${api_prefix}`, apiRouter);
	}
}

export default new Routes;
