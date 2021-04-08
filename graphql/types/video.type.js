export default `
  type Video {
    id: ID
    name: String,
    user: User,
    video_url: String
  }
  
  input VideoInput {
    id: ID
    name: String,
    user: String,
    video_url: String
  }
  `;
// entity Entity
// entity String
