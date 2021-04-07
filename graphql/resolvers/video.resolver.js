import Controller from '../../controllers/video.controller';

export default {
  queries: {
    oneVideo: Controller.findOne,
    allVideos: Controller.findAll,
  },
  mutations: {
    createVideo: Controller.create,
    updateVideo: Controller.update,
  },
};
