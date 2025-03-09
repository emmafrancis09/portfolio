import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;
if (!MONGODB_URI) {
  throw new Error("Error! Couldn't find MONGODB_URL in .env file");
}

async function ConnectDb() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB.");
      return { success: true };
    }

    await mongoose.connect(MONGODB_URI, {
      dbName: "contact",
    });

    console.log("Connected to MongoDB.");
    return { success: true };
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Database connection failed.");
  }
}

export default ConnectDb;
