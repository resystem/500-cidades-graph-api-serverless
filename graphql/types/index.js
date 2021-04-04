import userType from './user.type';
import paginatorType from './paginator.type';
import imageType from './image.type';

export default `
  scalar JSON
  
  ${userType}
  ${paginatorType}
  ${imageType}
`;
