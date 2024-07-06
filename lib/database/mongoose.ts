import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

//Alert : NextJS is serverless which is why it will create new mongoose connection for each request,
//        as a result we must cache our connection so that it can be reused in each request

let cached: MongooseConnection = (global as any).mongoose;

//if we are calling this file for the first time then we will create a new connection
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      // make a new connection
      dbName: "ai-image-tool",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
