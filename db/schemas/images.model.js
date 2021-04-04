import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const imageModel = new Schema({
  name: { type: String },
  user: { type: ObjectId, ref: 'users' },
  // entity: { type: ObjectId, ref: 'entity' },
  image_urls: {
    x100: { type: String },
    x200: { type: String },
    x400: { type: String },
    x600: { type: String },
    x1000: { type: String },
  },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default imageModel;
