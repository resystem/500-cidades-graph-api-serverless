import user from './user.resolver';
import video from './video.resolver';

export default {
  Query: {
    ...user.queries,
    ...video.queries,
  },
  Mutation: {
    ...user.mutations,
    ...video.mutations,
  },
};
