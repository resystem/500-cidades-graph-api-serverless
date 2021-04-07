import userType from './user.type';
import paginatorType from './paginator.type';
import imageType from './image.type';
import videoType from './video.type';

export default `
  scalar JSON
  
  ${userType}
  ${imageType}
  ${videoType}

  ${paginatorType}
`;
