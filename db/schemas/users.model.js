import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const usersModel = new Schema({
  ida: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  social_name: String,
  email: String,
  job: String,
  biography: String,
  interests: [String],
  phone: String,
  hometown: String,
  address: { type: ObjectId, ref: 'adresses' },
  gender: String,
  sexual_orientation: String,
  color_race: String,
  deficiency: String,
  facebook: String,
  instagram: String,
  twitter: String,
  tiktok: String,
  web_site: String,
  qualification: String,
  languages: [String],
  hobbies: String,
  books: String,
  music: String,
  food: String,
  movies: String,
  series: String,
  dream: String,
  whatsapp: String,
  favorite_places: String,
  places_wanna_visit: String,
  how_collaborate: String,
  sign: String,
  public_infos: [String],
  images: [
    { type: ObjectId, ref: 'images' },
  ],
  profile_image: { type: ObjectId, ref: 'images' },
  entities_owner: [
    { type: ObjectId, ref: 'entities' },
  ],
// subscriptions:  [
//   { type: ObjectId, ref: 'subscriptions' }
//   ]
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default usersModel;
