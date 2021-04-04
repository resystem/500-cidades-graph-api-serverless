import user from './user.resolver';
import image from './image.resolver';

export default {
  Query: {
    ...user.queries,
    ...image.queries,
  },
  Mutation: {
    ...user.mutations,
    ...image.mutations,
  },
};
