import user from './user.query';
import image from './image.query';

export default `
  type Query {
    ${user}
    ${image}
  }
`;
