import user from './user.resolver';
import entity from './entity.resolver';
import address from './address.resolver';
import image from './image.resolver';
import video from './video.resolver';

export default {
  Query: {
    ...user.queries,
    ...entity.queries,
    ...address.queries,
    ...image.queries,
    ...video.queries,
  },
  Mutation: {
    ...user.mutations,
    ...entity.mutations,
    ...address.mutations,
    ...image.mutations,
    ...video.mutations,
  },
};
