import mongoose from 'mongoose';
import users from './schemas/users.model';
import videos from './schemas/videos.model';


mongoose.Promise = global.Promise;

export default async ({ conn, mongoUrl = 'mongodb://localhost/500-cidades' }) => {
  console.log('mongoUrl: ', mongoUrl);

  try {
    if (!conn) {
      console.log('=> using new database connection');

      const newConnection = await mongoose.createConnection(mongoUrl || 'mongodb://localhost/500-cidades', {
        bufferCommands: false,
        bufferMaxEntries: 0,
        keepAlive: true,
      });

      newConnection.model('users', users);
      newConnection.model('videos', videos);

      return newConnection;
    }

    console.log('=> using existing database connection');
    return conn;
  } catch (err) {
    console.log('error: ', [err]);
    throw err;
  }
};
