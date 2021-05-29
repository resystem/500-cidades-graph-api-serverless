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

  type SingleImageUrl {
    mimified: String
    original: String
    thumbnail: String
  }
  
  input SingleImageUrlInput {
    mimified: String
    original: String
    thumbnail: String
  }


  type Image {
    id: ID
    name: String,
    description: String,
    user: User,
    image_urls: ImageUrl
    single_size: SingleImageUrl
  }
  
  input ImageInput {
    id: ID
    name: String,
    description: String,
    user: String,
    image_urls: ImageUrlInput
    single_size: SingleImageUrlInput
  }
  `;
// entity Entity
// entity String
