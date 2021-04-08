import Controller from '../../controllers/subscription.controller';

export default {
  queries: {
    oneSubscription: Controller.findOne,
    allEntities: Controller.findAll,
  },
  mutations: {
    createSubscription: Controller.create,
    updateSubscription: Controller.update,
  },
};