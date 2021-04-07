import user from './user.query';
import entity from './entity.query';

export default `
  type Query {
    ${user}
    ${entity}
  }
`;
