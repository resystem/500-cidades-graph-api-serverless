import Controller from '../../controllers/address.controller';

export default {
  queries: {
    oneAddress: Controller.findOne,
    allAdresses: Controller.findAll,
  },
  mutations: {
    createAddress: Controller.create,
    updateAddress: Controller.update,
  },
};
