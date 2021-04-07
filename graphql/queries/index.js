import user from './user.query';
import video from './video.query';

export default `
  type Query {
    ${user}
    ${video}
  }
`;
