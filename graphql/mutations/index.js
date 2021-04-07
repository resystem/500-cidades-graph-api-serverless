
import user from './user.mutation';
import image from './image.mutation';
import video from './video.mutation';

export default `
  type Mutation {
    ${user}
    ${image}
    ${video}
  }
`;
