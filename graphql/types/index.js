import userType from './user.type';
import addressType from './address.type';
import paginatorType from './paginator.type';

export default `
  scalar JSON
  
  ${userType}
  ${addressType}


  ${paginatorType}
`;
