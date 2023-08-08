import logger from "../../config/winstonLoggerConfig";
import UserRepository from "./userRepository";
class UserController {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(): Promise<Array<object>> {
    const users = await this.userRepository.getAllUsers();
    logger.info(users);
    return [];
  }
}

export default UserController;
