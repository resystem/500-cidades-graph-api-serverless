import userType from './user.type';
import addressType from './address.type';
import paginatorType from './paginator.type';
import entityType from './entity.type';
import imageType from './image.type';
import videoType from './video.type';

export default `
  scalar JSON
  
  ${userType}
  ${entityType}
  ${addressType}
  ${imageType}
  ${videoType}

  ${paginatorType}
`;
