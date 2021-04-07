import user from './user.resolver';
import image from './image.resolver';
import video from './video.resolver';

export default {
  Query: {
    ...user.queries,
    ...image.queries,
    ...video.queries,
  },
  Mutation: {
    ...user.mutations,
    ...image.mutations,
    ...video.mutations,
  },
};
