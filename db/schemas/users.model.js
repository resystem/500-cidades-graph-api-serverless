import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const usersModel = new Schema({
  ida: { type: String, required: true, unique: true },
  first_name: { type: String },
  last_name: { type: String },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default usersModel;
