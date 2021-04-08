import user from './user.query';
import subscription  from './subscription.query';

export default `
  type Query {
    ${user}
    ${subscription}
  }
`;
