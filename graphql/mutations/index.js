
import user from './user.mutation';
import address from './address.mutation';
import image from './image.mutation';
import video from './video.mutation';

export default `
  type Mutation {
    ${user}
    ${address}
    ${image}
    ${video}
  }
`;
