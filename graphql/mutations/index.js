
import user from './user.mutation';
import address from './address.mutation';

export default `
  type Mutation {
    ${user}
    ${address}
  }
`;
