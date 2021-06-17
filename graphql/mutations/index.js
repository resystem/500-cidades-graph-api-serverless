
import user from './user.mutation';
import address from './address.mutation';
import image from './image.mutation';
import asset from './asset.mutation';
import entity from './entity.mutation';

// import subscription from './subscription.mutation';
// import video from './video.mutation';

export default `
  type Mutation {
    ${user}
    ${address}
    ${image}
    ${asset}
    ${entity}
  }
  `;

// ${subscription}
// ${video}
