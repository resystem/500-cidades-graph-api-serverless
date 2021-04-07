import user from './user.resolver';
import address from './address.resolver';
import image from './image.resolver';
import video from './video.resolver';

export default {
  Query: {
    ...user.queries,
    ...address.queries,
    ...image.queries,
    ...video.queries,
  },
  Mutation: {
    ...user.mutations,
    ...address.mutations,
    ...image.mutations,
    ...video.mutations,

  },
};
