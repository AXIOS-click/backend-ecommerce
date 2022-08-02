import { Request, Response } from "express";
import Responses from "../../providers/Responses";

class StatusServiceController {
  public static run(req: Request, res: Response): any{
    const response = new Responses(res);
    return response.success();
  }
}

export default StatusServiceController;
