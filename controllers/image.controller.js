import { UserInputError } from 'apollo-server-lambda';
import { getMongoDoc } from '../utils/mongo.util';

/**
* create - Função que cria uma imagem no banco de dados
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = async (parent, args, { images }) => {
  let image;

  // if (!args.image.user && !args.image.entity)
  // throw new Error('"user" or "entity" value is required');
  if (!args.image.image_urls) throw new Error('Missing "image_urls" value');

  try {
    image = getMongoDoc(await images.create(args.image));
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

  return { ...image, id: image._id };
};

/**
* findOne - Função que acha um imagem por id
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = async (parent, args, { images }) => {
  if (!args.image.id) throw new Error('Missing "image.id" value');

  const resp = await images.findOne({ _id: args.image.id })
    .populate('user');
    // .populate('entity');

  const image = getMongoDoc(resp);

  return { ...image, id: image._id };
};

/**
 findAll - Função que acha retorna imagems com as informações indicadas
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = async (parent, args, { images }) => {
  const paginator = args.paginator || {};
  const response = await images.find(args.image)
    .skip(paginator.skip)
    .limit(paginator.limit)
    .populate('user')
    // .populate('entity')
    .lean()
    .then(resp => resp.map(image => ({ ...image, id: image._id })))
    .catch((err) => {
      throw new Error(err);
    });

  return response;
};

/**
* update - Função que atualiza a imagem
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = async (parent, args, { images }) => {
  const toUpdate = {};
  if (args.image.image_urls) toUpdate.image_urls = args.image.image_urls;
  if (args.image.user) toUpdate.user = args.image.user;
  if (args.image.entity) toUpdate.entity = args.image.entity;
  if (args.image.name) toUpdate.name = args.image.name;

  if (args.image.image_urls && !args.image.image_urls.x100) throw new Error('Missing "image_urls" value');

  const resp = await images.findOneAndUpdate(
    { _id: args.image.id },
    toUpdate,
    { new: true },
  ).populate('user');
    // .populate('entity');
  const image = getMongoDoc(resp);

  return { ...image, id: image._id };
};

export default {
  create,
  findOne,
  findAll,
  update,
};
