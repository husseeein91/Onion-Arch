import { Router } from "express";
import UserController from "./userController";

export default (router: Router, userController: UserController) => {
  router.get("/", async (req, res) => {
    const users = await userController.getAllUsers();
    res.json({ users: users });
  });
  return router;
};
