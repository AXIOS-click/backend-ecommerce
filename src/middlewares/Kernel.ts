/**
 * Registra sus middlewares Express
 */
import { Application } from 'express';
import Http from "./Http";
class Kernel {
  public static init (_express: Application): Application {

    // Montar el middleware básico de apis express
    _express = Http.mount(_express);

    return _express;
  }
}
export default Kernel;
