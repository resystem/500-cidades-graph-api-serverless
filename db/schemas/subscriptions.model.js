import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const subscriptionModel = new Schema({
  user: { type: ObjectId, ref: 'users' },
//   entity: { type: ObjectId, ref: 'entity' }
  role: { type: String, required: true },
  is_aproved: Boolean,
  is_blocked: Boolean,
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default subscriptionModel;
