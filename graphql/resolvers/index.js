import user from './user.resolver';
import subscription from './subscription.resolver';

export default {
  Query: {
    ...user.queries,
    ...subscription.queries
  },
  Mutation: {
    ...user.mutations,
    ...subscription.mutations
  },
};
