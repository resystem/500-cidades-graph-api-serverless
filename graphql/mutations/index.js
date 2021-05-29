
import user from './user.mutation';
// import subscription from './subscription.mutation';
// import entity from './entity.mutation';
import address from './address.mutation';
import image from './image.mutation';
// import video from './video.mutation';

export default `
  type Mutation {
    ${user}
    ${address}
    ${image}
  }
  `;

// ${subscription}
// ${entity}
// ${video}
