export default `

  type ImageUrl {
    x100: String
    x200: String
    x400: String
    x600: String
    x1000: String
  }
  
  input ImageUrlInput {
    x100: String
    x200: String
    x400: String
    x600: String
    x1000: String
  }

  type Image {
    id: ID
    name: String,
    user: User,
    image_urls: ImageUrl
  }
  
  input ImageInput {
    id: ID
    name: String,
    user: String,
    image_urls: ImageUrlInput
  }
  `;
// entity Entity
// entity String
