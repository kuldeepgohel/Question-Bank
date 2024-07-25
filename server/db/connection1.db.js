import mongoose from "mongoose";
const connectionWithMongoose = async () => {
  const mongo = process.env.MONGO_URL;

  try {
    const connectionInstence = await mongoose.connect(mongo);
  } catch (e) {
    console.log(e);
  }
};

export { connectionWithMongoose };
