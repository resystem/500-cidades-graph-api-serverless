import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const entityModel = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  email: { type: String, required: true },

  // location: { type: ObjectId, ref: 'adresses' },// (Address)
  // interests: [{ type: ObjectId, ref: 'subscriptions' }],// (arr of subscription)
  // images: [{ type: ObjectId, ref: 'images' }],// (arr of Image)
  // videos: [{ type: ObjectId, ref: 'videos' }], //: (arr of videos)
  owner: { type: ObjectId, ref: 'users' },

  biografy: { type: String },
  link: { type: String },
  phone: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  tik_tok: { type: String },
  web_site: { type: String },
  price_range: { type: String },

  roles: [{ type: String }],
  caracteristics: [{ type: String }],

  birth_date: { type: Date },
  open_at_mon: { type: Date },
  open_at_tue: { type: Date },
  open_at_wed: { type: Date },
  open_at_thu: { type: Date },
  open_at_fry: { type: Date },
  open_at_sat: { type: Date },
  open_at_sun: { type: Date },
  closed_at_mon: { type: Date },
  closed_at_tue: { type: Date },
  closed_at_wed: { type: Date },
  closed_at_thu: { type: Date },
  closed_at_fry: { type: Date },
  closed_at_sat: { type: Date },
  closed_at_sun: { type: Date },

  ticket_office: { type: Boolean },
  has_accommodation: { type: Boolean },
  has_accessibility: { type: Boolean },

  capacity: { type: Number },
  qtt_rooms: { type: Number },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default entityModel;
