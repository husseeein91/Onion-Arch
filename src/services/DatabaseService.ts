import mongoose, { ConnectOptions } from "mongoose";
import logger from "../config/winstonLoggerConfig";

class DatabaseService {
  private MONGO_HOST: string;
  private MONGO_USERNAME: string;
  private MONGO_PASSWORD: string;
  private MONGO_PORT: string;
  private MONGO_DBNAME: string;
  private MONGO_LOCAL: boolean;
  private MONGO_URI: string;

  constructor(config: any) {
    this.MONGO_DBNAME = config.MONGO_DBNAME;
    this.MONGO_HOST = config.MONGO_HOST;
    this.MONGO_LOCAL = config.MONGO_LOCAL;
    this.MONGO_PASSWORD = config.MONGO_PASSWORD;
    this.MONGO_PORT = config.MONGO_PORT;
    this.MONGO_USERNAME = config.MONGO_USERNAME;
    if (!this.MONGO_LOCAL) {
      this.MONGO_URI = `mongodb://${this.MONGO_USERNAME}:${this.MONGO_PASSWORD}@${this.MONGO_HOST}:${this.MONGO_PORT}/${this.MONGO_DBNAME}?authSource=admin`;
    } else {
      this.MONGO_URI = `mongodb://${this.MONGO_HOST}:${this.MONGO_PORT}/${this.MONGO_DBNAME}`;
    }
    this.connect();
  }

  private connect(): any {
    try {
      mongoose.set("strictQuery", true);
      mongoose.connect(`${this.MONGO_URI}?authSource=admin`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      } as ConnectOptions);
      logger.info("connected to mongodb successfully");
    } catch (err) {
      logger.error((err as Error).message);
    }
  }

  async getAll(collectionName: string): Promise<Array<object>> {
    try {
      const collection = mongoose.connection.collection(collectionName);
      const dataToBeReturned = await collection.find({}).toArray();
      logger.info(`data returned from ${collectionName}`);
      return dataToBeReturned;
    } catch (err) {
      logger.error(
        `error in finding data in collection ${collectionName}`,
        err
      );
      return [];
    }
  }
}

export default DatabaseService;
