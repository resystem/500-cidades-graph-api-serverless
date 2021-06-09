import user from './user.query';
// import subscription from './subscription.query';
// import entity from './entity.query';
import address from './address.query';
import image from './image.query';
import asset from './asset.query';
// import video from './video.query';

export default `
  type Query {
    ${user}
    ${address}
    ${image}
    ${asset}
  }
  `;

// ${subscription}
// ${entity}
// ${video}
