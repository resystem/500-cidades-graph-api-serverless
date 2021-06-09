import mongoose from 'mongoose';
import users from './schemas/users.model';
import subscriptions from './schemas/subscriptions.model';
import entities from './schemas/entities.model';
import adresses from './schemas/adresses.model';
import images from './schemas/images.model';
import videos from './schemas/videos.model';
import assets from './schemas/assets.model';


mongoose.Promise = global.Promise;

export default async ({ conn, mongoUrl }) => {
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
      newConnection.model('subscriptions', subscriptions);
      newConnection.model('entities', entities);
      newConnection.model('adresses', adresses);
      newConnection.model('images', images);
      newConnection.model('videos', videos);
      newConnection.model('assets', assets);
      return newConnection;
    }

    console.log('=> using existing database connection');
    return conn;
  } catch (err) {
    console.log('error: ', [err]);
    throw err;
  }
};
