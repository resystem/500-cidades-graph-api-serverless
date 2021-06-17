import user from './user.resolver';
import entity from './entity.resolver';
import address from './address.resolver';
import image from './image.resolver';
import asset from './asset.resolver';

// import subscription from './subscription.resolver';
// import video from './video.resolver';

export default {
  Query: {
    ...user.queries,
    ...address.queries,
    ...image.queries,
    ...asset.queries,
    ...entity.queries,
  },
  Mutation: {
    ...user.mutations,
    ...address.mutations,
    ...image.mutations,
    ...asset.mutations,
    ...entity.mutations,
  },
};

// ...subscription.queries,
// ...video.queries,

// ...subscription.mutations,
// ...video.mutations,
