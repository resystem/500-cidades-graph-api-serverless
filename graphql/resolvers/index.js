import user from './user.resolver';
// import subscription from './subscription.resolver';
// import entity from './entity.resolver';
import address from './address.resolver';
import image from './image.resolver';
// import video from './video.resolver';

export default {
  Query: {
    ...user.queries,
    ...address.queries,
    ...image.queries,
  },
  Mutation: {
    ...user.mutations,
    ...address.mutations,
    ...image.mutations,
  },
};

// ...subscription.queries,
// ...entity.queries,
// ...video.queries,

// ...subscription.mutations,
// ...entity.mutations,
// ...video.mutations,
