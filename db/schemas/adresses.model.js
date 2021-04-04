import { Schema } from 'mongoose';

const addressModel = new Schema({
  state: { type: String },
  city: { type: String },
  country: { type: String },
  street: { type: String },
  number: { type: String },
  district: { type: String },
  zipcode: { type: String },
  geolocation: { type: Schema.Types.Object },
}, {
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default addressModel;
