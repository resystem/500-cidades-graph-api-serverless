import userType from './user.type';
import addressType from './address.type';
import paginatorType from './paginator.type';
import imageType from './image.type';
import assetsType from './assets.type';
import entityType from './entity.type';

// import subscriptionType from './subscription.type';
// import videoType from './video.type';

export default `
  scalar JSON

  ${userType}
  ${addressType}
  ${imageType}
  ${assetsType}
  ${entityType}
  
  ${paginatorType}
`;

// ${subscriptionType}
// ${videoType}
