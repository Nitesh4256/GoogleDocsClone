import mongoose from "mongoose";
const Connection = async () => {
  const URL = `mongodb+srv://niteshshivhare321:niteshshivhare@cluster0.mveahhv.mongodb.net/`;

  try {
    await mongoose.connect(URL, {});

    console.log("Database Connected");
  } catch (error) {
    console.log("Error while connection with data base");
    console.log(error);
  }
};

export default Connection;
