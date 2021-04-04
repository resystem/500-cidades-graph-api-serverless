import user from './user.query';
import address from './address.query';

export default `
  type Query {
    ${user}
    ${address}
  }
`;
