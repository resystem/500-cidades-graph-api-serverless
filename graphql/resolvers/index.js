import user from './user.resolver';
import entity from './entity.resolver';

export default {
  Query: {
    ...user.queries,
    ...entity.queries,
  },
  Mutation: {
    ...user.mutations,
    ...entity.mutations,
  },
};
