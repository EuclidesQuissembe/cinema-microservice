import "dotenv";
import { Db, MongoClient } from "mongodb";

let connection: MongoClient | null;

let db: Db | null;

export const connect = (callback: any) => {
  if (connection) return callback(null, db);

  MongoClient.connect(
    process.env.MONGO_CONNECTION ?? "",
    {
      useUnifiedTopology: true,
    },
    (err, conn) => {
      if (err) {
        return callback(err, null);
      } else {
        connection = conn;
        db = conn.db(process.env.DATABASE_NAME);
        return callback(null, db);
      }
    }
  );
};

export const disconnect = () => {
  if (!connection) return true;
  connection.close();
  connection = null;
  return true;
};
