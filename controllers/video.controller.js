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
const create = async (parent, args, { videos }) => {
  let video;

  // if (!args.video.user && !args.video.entity)
  // throw new Error('"user" or "entity" value is required');
  if (!args.video.video_url) throw new Error('Missing "video_url" value');

  try {
    video = getMongoDoc(await videos.create(args.video));
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

  return { ...video, id: video._id };
};

/**
* findOne - Função que acha um imagem por id
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = async (parent, args, { videos }) => {
  if (!args.video.id) throw new Error('Missing "video.id" value');

  const resp = await videos.findOne({ _id: args.video.id })
    .populate('user');
    // .populate('entity');

  const video = getMongoDoc(resp);

  return { ...video, id: video._id };
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
const findAll = async (parent, args, { videos }) => {
  const paginator = args.paginator || {};
  const response = await videos.find(args.video)
    .skip(paginator.skip)
    .limit(paginator.limit)
    .populate('user')
    // .populate('entity')
    .lean()
    .then(resp => resp.map(video => ({ ...video, id: video._id })))
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
const update = async (parent, args, { videos }) => {
  const toUpdate = {};
  if (args.video.video_url) toUpdate.video_url = args.video.video_url;
  if (args.video.user) toUpdate.user = args.video.user;
  if (args.video.entity) toUpdate.entity = args.video.entity;
  if (args.video.name) toUpdate.name = args.video.name;


  const resp = await videos.findOneAndUpdate(
    { _id: args.video.id },
    toUpdate,
    { new: true },
  ).populate('user');
    // .populate('entity');
  const video = getMongoDoc(resp);

  return { ...video, id: video._id };
};

export default {
  create,
  findOne,
  findAll,
  update,
};
