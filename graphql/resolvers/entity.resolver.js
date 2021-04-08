import Controller from '../../controllers/entity.controller';

export default {
  queries: {
    oneEntity: Controller.findOne,
    allEntities: Controller.findAll,
  },
  mutations: {
    createEntity: Controller.create,
    updateEntity: Controller.update,
  },
};
