import { UserInputError } from 'apollo-server-lambda';
import { getMongoDoc } from '../utils/mongo.util';

/**
* create - Função que cria uma inscrição no banco de dados
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = async (parent, args, { subscriptions }) => {
  let subscription;

  try {
    subscription = await subscriptions.create(args.subscription);
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

  return { ...getMongoDoc(subscription), id: subscription._id };
};

/**
* findOne - Função que acha uma inscrição por id
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = async (parent, args, { subscriptions }) => {
  if (!args.subscription.id) throw new Error('Missing "subscription.id" value');

  const resp = await subscriptions.findOne({ _id: args.subscription.id })

  const subscription = getMongoDoc(resp);
  return { ...subscription, id: subscription._id };
};

/**
 findAll - Função que acha retorna inscriçãos com as informações indicadas
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = async (parent, args, { subscriptions }) => {
  const paginator = args.paginator || {};
  const response = await subscriptions.find(args.subscription)
    .skip(paginator.skip)
    .limit(paginator.limit)
    .lean()
    .then(resp => resp.map(subscription => ({ ...subscription, id: subscription._id })))
    .catch((err) => {
      throw new Error(err);
    });

  return response;
};

/**
* update - Função que atualiza a inscrição e retorna ela atualizada
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = async (parent, args, { subscriptions }) => {
  if (!args.subscription.id) throw new Error('Missing "subscription.id" value');

  const resp = await subscriptions.findOneAndUpdate(
    { _id: args.subscription.id },
    args.subscription,
    { new: true },
  )
  const subscription = getMongoDoc(resp);

  return { ...subscription, id: subscription._id };
};

export default {
  create,
  findOne,
  findAll,
  update,
};
