import { Router } from "express";
import DatabaseService from "../../services/DatabaseService";
import UserRepository from "./userRepository";
import UserController from "./userController";
import userRoutes from "./routes";

export default (router: Router, databaseService: DatabaseService) => {
  const userRepository = new UserRepository(databaseService);
  const userController = new UserController(userRepository);
  const userRouter = userRoutes(router, userController);
  return userRouter;
};
