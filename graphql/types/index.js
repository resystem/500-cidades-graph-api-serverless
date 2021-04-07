import userType from './user.type';
import paginatorType from './paginator.type';
import entityType from './entity.type';

export default `
  scalar JSON
  
  ${userType}
  ${entityType}

  
  ${paginatorType}
`;
