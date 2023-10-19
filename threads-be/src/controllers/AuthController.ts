import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const response = await AuthService.register(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const response = await AuthService.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await AuthService.check(loginSession);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthController();
