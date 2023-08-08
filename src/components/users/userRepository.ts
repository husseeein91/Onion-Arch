import DatabaseService from "../../services/DatabaseService";
class UserRepository {
  private databaseService: DatabaseService;
  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }
  async getAllUsers(): Promise<Array<object>> {
    return await this.databaseService.getAll("User");
  }
}

export default UserRepository;
