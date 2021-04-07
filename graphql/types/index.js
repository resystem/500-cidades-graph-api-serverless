import userType from './user.type';
import paginatorType from './paginator.type';
import videoType from './video.type';

export default `
  scalar JSON
  
  ${userType}
  ${paginatorType}
  ${videoType}
`;
