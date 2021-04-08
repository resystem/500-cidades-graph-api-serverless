import user from './user.query';
import subscription  from './subscription.query';
import entity from './entity.query';
import address from './address.query';
import image from './image.query';
import video from './video.query';

export default `
  type Query {
    ${user}
    ${subscription}
    ${entity}
    ${address}
    ${image}
    ${video}
  }
`;
