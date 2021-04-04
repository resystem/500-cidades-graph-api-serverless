import userType from './user.type';
import paginatorType from './paginator.type';

export default `
  scalar JSON
  
  ${userType}
  ${paginatorType}
`;
