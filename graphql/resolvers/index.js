import user from './user.resolver';
// import subscription from './subscription.resolver';
// import entity from './entity.resolver';
import address from './address.resolver';
// import image from './image.resolver';
// import video from './video.resolver';

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

// ...subscription.queries,
// ...entity.queries,
// ...image.queries,
// ...video.queries,

// ...subscription.mutations,
// ...entity.mutations,
// ...image.mutations,
// ...video.mutations,
