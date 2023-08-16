import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  mongoose
    .connect(dbUri)
    .then(() => logger.info("Database connected!"))
    .catch((err) => logger.info(`Could not connacted to DB: ${err}`));
}

export default connect;
