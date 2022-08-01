/**
 * Define Las configuraciones de la app
 */
 import * as path from 'path';
 import * as dotenv from 'dotenv';

class Locals {
  public static config(): any{
    dotenv.config({ path: path.join(__dirname, '../../.env') });

    const port = process.env.PORT || 3000;
    const node_env = process.env.NODE_ENV || 'dev';
    const appSecret = process.env.APP_SECRET || '-QV.LlñvjQñÑñ8;5ñ#jyLñl;sY;jlyy8-;DjJYlDdddÑ@2Q;gd6;53d88;583@299QQ@Y3yqlÑqD+y';
    const mongooseUrl = process.env.MONGOOSE_URL || "mongodb+srv://admin:Bryan14700--@ecommerce-axios-pruebit.0uevi.mongodb.net/?retryWrites=true&w=majority";
    const api_prefix = process.env.API_PREFIX || 'api';

    return {
      port,
      node_env,
      appSecret,
      mongooseUrl,
      api_prefix
    };
  }
}

export default Locals;
