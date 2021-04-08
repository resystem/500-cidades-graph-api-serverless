import userType from './user.type';
import subscriptionType from './subscription.type';
import paginatorType from './paginator.type';

export default `
  scalar JSON

  ${userType}
  ${subscriptionType}
  ${paginatorType}
`;
