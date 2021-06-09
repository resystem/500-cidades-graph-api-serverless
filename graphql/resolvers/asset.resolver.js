import Controller from '../../controllers/assets.controller';

export default {
  queries: {
    oneAsset: Controller.findOne,
    allAssets: Controller.findAll,
  },
  mutations: {
    createAsset: Controller.create,
    updateAsset: Controller.update,
    populateAssets: Controller.populate,
  },
};
