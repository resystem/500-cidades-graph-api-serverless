
import user from './user.mutation';
import entity from './entity.mutation';

export default `
  type Mutation {
    ${user}
    ${entity}
  }
`;
