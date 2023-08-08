import wholeApp from "./app";
import DatabaseService from "./services/DatabaseService";
import userService from "./components/users";

const { app, Router } = wholeApp;
const {
  MONGO_HOST,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DBNAME,
  MONGO_LOCAL,
} = process.env;

const databaseService = new DatabaseService({
  MONGO_HOST,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DBNAME,
  MONGO_LOCAL,
});

app.use("/users", userService(Router(), databaseService));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
