import { MongoClient, MongoError } from "mongodb";
import test from "tape";
import { connect, disconnect } from "./mongodb";

export const runTest = () => {
  test("MongoDB Connection", (t) => {
    connect((_: MongoError, conn: MongoClient) => {
      t.assert(conn, "Connection established");
      t.end();
    });
  });

  test("MongoDB Disconnection", (t) => {
    t.assert(disconnect, "Disconnected");
    t.end();
  });
};
