import { Schema } from 'mongoose';

const assetsModel = new Schema({
  type: { type: String, unique: true },
  data: { type: Schema.Types.Object },
}, {
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default assetsModel;
