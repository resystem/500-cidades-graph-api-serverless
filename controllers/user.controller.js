import { UserInputError } from 'apollo-server-lambda';
import Sympla from '../services/sympla.service';

/**
* create - Função que cria um usuário no banco de dados
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = async (parent, args, { users }) => {
  let user;

  try {
    user = await users.create(args.user);
  } catch (err) {
    console.log([err]);
    const duplicatedKeys = Object.keys(err.keyPattern);
    if (duplicatedKeys) {
      throw new UserInputError(`Duplicated in [${duplicatedKeys.toString()}] keys`, {
        invalidArgs: duplicatedKeys,
      });
    }
    throw new Error(err);
  }

  return user;
};

/**
* findOne - Função que acha um usuário por id, e-mail, cpf ou ida.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { users }) => {
  const $or = [];

  if (args.id) $or.push({ _id: args.id });
  if (args.ida) $or.push({ ida: args.ida });
  if (args.email) $or.push({ email: args.email });
  if (args.cpf) $or.push({ cpf: args.cpf });

  return users.findOne({ $or });
};

/**
 findAll - Função que acha retorna usuários com as informações indicadas
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = (parent, args, { users }) => users.find(args.user).lean()
  .then(resp => resp.map(usr => ({ ...usr, id: resp._id })))
  .catch((err) => {
    throw new Error(err);
  });

/**
* update - Função que atualiza o usuário
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = async (parent, args, { users }) => {
  const user = await users
    .findOneAndUpdate({ _id: args.user.id }, args.user, { new: true });

  return user;
};

export default {
  create,
  findOne,
  findAll,
  update,
};