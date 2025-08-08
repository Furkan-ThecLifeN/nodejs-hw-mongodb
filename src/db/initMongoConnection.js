import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;
    console.log('Connecting to MongoDB with URI:', uri);
    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error.message);
    process.exit(1);
  }
};
