
import user from './user.mutation';
import image from './image.mutation';

export default `
  type Mutation {
    ${user}
    ${image}
  }
`;
