
import user from './user.mutation';
import subscription from './subscription.mutation';

export default `
  type Mutation {
    ${user}
    ${subscription}
  }
`;
