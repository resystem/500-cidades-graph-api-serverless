import user from './user.resolver';
import address from './address.resolver';

export default {
  Query: {
    ...user.queries,
    ...address.queries,
  },
  Mutation: {
    ...user.mutations,
    ...address.mutations,
  },
};
