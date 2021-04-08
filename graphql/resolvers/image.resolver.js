import Controller from '../../controllers/image.controller';

export default {
  queries: {
    oneImage: Controller.findOne,
    allImages: Controller.findAll,
  },
  mutations: {
    createImage: Controller.create,
    updateImage: Controller.update,
  },
};
