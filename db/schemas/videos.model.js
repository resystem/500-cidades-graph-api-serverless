import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const videoModel = new Schema({
  name: { type: String },
  user: { type: ObjectId, ref: 'users' },
  // entity: { type: ObjectId, ref: 'entities' }
  video_url: { type: String },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default videoModel;
