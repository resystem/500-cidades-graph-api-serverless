import { UserInputError } from 'apollo-server-lambda';
import { getMongoDoc } from '../utils/mongo.util';

/**
* create - Função que cria uma entidade no banco de dados
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = async (parent, args, { entities }) => {
  console.log('🚀 ~ args', args);
  let entity;

  try {
    entity = await entities.create(args.entity);
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
  const entityDoc = getMongoDoc(entity);
  return {
    ...entityDoc,
    id: entityDoc._id,
    address: {
      ...entityDoc.address,
      id: entityDoc.address._id,
    },
    profile_image: {
      ...entityDoc.profile_image,
      id: entityDoc.profile_image._id,
    },
  };
};

/**
* findOne - Função que acha uma entidade por id
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = async (parent, args, { entities }) => {
  if (!args.entity.id) throw new Error('Missing "entity.id" value');

  const resp = await entities.findOne({ _id: args.entity.id })
    // .populate('location')
    // .populate('interests')
    // .populate('images')
    // .populate('videos')
    .populate('profile_image')
    .populate('owner');

  const entity = getMongoDoc(resp);
  return { ...entity, id: entity._id };
};

/**
 findAll - Função que acha retorna entidades com as informações indicadas
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = async (parent, args, { entities }) => {
  const paginator = args.paginator || {};
  const response = await entities.find(args.entity)
    .skip(paginator.skip)
    .limit(paginator.limit)
    .populate('address')
    .populate('owner')
    .populate('profile_image')
    // .populate('interests')
    // .populate('images')
    // .populate('videos')
    .lean()
    .then(resp => resp.map(entity => ({ ...entity, id: entity._id })))
    .catch((err) => {
      throw new Error(err);
    });


  console.log('🚀 ~ response', response);
  return response.map(e => ({
    ...e,
    id: e._id,
    address: {
      ...e.address,
      id: e.address._id,
    },
    profile_image: {
      ...e.profile_image,
      id: e.profile_image._id,
    },
  }));
};

/**
* update - Função que atualiza a entidade e retorna ela atualizada
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = async (parent, args, { entities }) => {
  if (!args.entity.id) throw new Error('Missing "entity.id" value');

  const resp = await entities.findOneAndUpdate(
    { _id: args.entity.id },
    args.entity,
    { new: true },
  )
    // .populate('interests')
    // .populate('images')
    // .populate('videos')
    .populate('address')
    .populate('profile_image')
    .populate('owner');
  const entity = getMongoDoc(resp);

  return {
    ...entity,
    id: entity._id,
    address: {
      ...entity.address,
      id: entity.address._id,
    },
    profile_image: {
      ...entity.profile_image,
      id: entity.profile_image._id,
    },
  };
};

export default {
  create,
  findOne,
  findAll,
  update,
};
