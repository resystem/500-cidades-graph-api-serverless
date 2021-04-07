import user from './user.query';
import address from './address.query';
import image from './image.query';
import video from './video.query';

export default `
  type Query {
    ${user}
    ${address}
    ${image}
    ${video}
  }
`;
