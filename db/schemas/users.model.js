import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const usersModel = new Schema({
  ida: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  social_name: String,
  facebook: String,
  instagram: String,
  twitter: String,
  tiktok: String,
  gender: String,
  biography: String,
  sexual_orientation: String,
  color_race: String,
  deficiency: String,
  birth_sign: String,
  main_language: String,
  job: String,
  email: String,
  whatsapp: String,
  profile_image: { type: ObjectId, ref: 'images' },
  languages: [String],
  phone: String,
  web_site: String,
  hometown: String,
  homestate: String,
  homecountry: String,
  education: String,

  interests: [String],
  address: { type: ObjectId, ref: 'adresses' },
  hobbies: [String],
  books: [String],
  songs: [String],
  foods: [String],
  movies: [String],
  series: [String],
  dreams: [String],
  favorite_places: [String],
  places_wanna_visit: [String],
  how_to_collaborate: [String],
  public_infos: [String],
  images: [
    { type: ObjectId, ref: 'images' },
  ],
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
