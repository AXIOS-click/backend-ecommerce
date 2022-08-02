import { Response } from 'express';
import httpStatus from 'http-status';

class Responses {
  private data: any;
  private res: Response;
  constructor(res: Response, data?: any) {
    this.data = data;
    this.res = res;
  }
  created(){
    this.res.status(httpStatus.CREATED).json({
      ok: true,
      status: 'created',
      data: this.data
    });
  }
  success(){
    this.res.status(httpStatus.OK).json({
      ok: true,
      status: 'success',
      data: this.data
    });
  }
  error(message: string){
    this.res.status(httpStatus.BAD_REQUEST).json({
      ok: false,
      status: 'error',
      message: message
    });
  }
  notFound(message: string){
    this.res.status(httpStatus.NOT_FOUND).json({
      ok: false,
      status: 'notFound',
      message: message
    });
  }
  badRequest(message: string){
    this.res.status(httpStatus.BAD_REQUEST).json({
      ok: false,
      status: 'badRequest',
      message: message
    });
  }
  unauthorized(message: string){
    this.res.status(httpStatus.UNAUTHORIZED).json({
      ok: false,
      status: 'unauthorized',
      message: message
    });
  }
  forbidden(message: string){
    this.res.status(httpStatus.FORBIDDEN).json({
      ok: false,
      status: 'forbidden',
      message: message
    });
  }
  internalServerError(message: any){
    this.res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      status: 'internalServerError',
      message: message
    });
  }
  unprocessableEntity(message: any){
    this.res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
      ok: false,
      status: 'unprocessableEntity',
      message: message
    });
  }
  serviceUnavailable(message: any){
    this.res.status(httpStatus.SERVICE_UNAVAILABLE).json({
      ok: false,
      status: 'serviceUnavailable',
      message: message
    });
  }
}
export default Responses;
