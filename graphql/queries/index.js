import user from './user.query';
import image from './image.query';
import video from './video.query';

export default `
  type Query {
    ${user}
    ${image}
    ${video}
  }
`;
