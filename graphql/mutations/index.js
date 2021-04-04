
import user from './user.mutation';
import video from './video.mutation';

export default `
  type Mutation {
    ${user}
    ${video}
  }
`;
