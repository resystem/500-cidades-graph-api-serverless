import { UserInputError } from 'apollo-server-lambda';
import { getMongoDoc } from '../utils/mongo.util';

/**
* create - Função que cria um endereço no banco de dados
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = async (parent, args, { adresses }) => {
  let address;

  if (!args.address.geolocation) throw new Error('Missing "address.geolocation" value');
  try {
    address = getMongoDoc(await adresses.create(args.address));
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

  return { ...address, id: address._id };
};

/**
* findOne - Função que acha um endereço por id
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = async (parent, args, { adresses }) => {
  if (!args.address.id) throw Error('Missing "address.id" value');

  const result = getMongoDoc(await adresses.findOne({ _id: args.address.id }));
  return { ...result, id: result._id };
};

/**
 findAll - Função que acha retorna endereços com as informações indicadas
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = async (parent, args, { adresses }) => {
  const paginator = args.paginator || {};
  const response = await adresses.find(args.address)
    .skip(paginator.skip)
    .limit(paginator.limit)
    .lean()
    .then(resp => resp.map(address => ({ ...address, id: address._id })))
    .catch((err) => {
      throw new Error(err);
    });

  return response;
};
/**
* update - Função que atualiza o endereço
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = async (parent, args, { adresses }) => {
  if (!args.address.geolocation) throw new Error('Missing "address.geolocation" value');

  const resp = await adresses.findOneAndUpdate(
    { _id: args.address.id },
    args.address,
    { new: true },
  );
  const address = getMongoDoc(resp);

  return { ...address, id: address._id };
};

export default {
  create,
  findOne,
  findAll,
  update,
};
