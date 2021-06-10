export default `
  type User {
    id: ID
    ida: String
    name: String
    social_name: String
    email: String
    biography: String
    whatsapp: String
    facebook: String
    instagram: String
    twitter: String
    tiktok: String
    job: String
    phone: String
    hometown: String
    homestate: String
    homecountry: String
    gender: String
    sexual_orientation: String

    color_race: String
    deficiency: String
    web_site: String
    qualification: String
    main_language: String
    birth_sign: String
    birth_date: String
    education: String
    
    how_to_collaborate: [String]
    places_wanna_visit: [String]
    favorite_places: [String]
    dreams: [String]
    series: [String]
    movies: [String]
    foods: [String]
    songs: [String]
    books: [String]
    interests: [String]
    languages: [String]
    hobbies: [String]
    
    address: Address
    profile_image: Image
  }

  input UserInput {
    id: ID
    ida: String
    name: String
    social_name: String
    email: String
    biography: String
    whatsapp: String
    facebook: String
    instagram: String
    twitter: String
    tiktok: String
    job: String
    phone: String
    hometown: String
    homestate: String
    homecountry: String
    gender: String
    sexual_orientation: String

    color_race: String
    deficiency: String
    web_site: String
    qualification: String
    main_language: String
    birth_sign: String
    birth_date: String
    education: String
    
    how_to_collaborate: [String]
    places_wanna_visit: [String]
    favorite_places: [String]
    dreams: [String]
    series: [String]
    movies: [String]
    foods: [String]
    songs: [String]
    books: [String]
    interests: [String]
    languages: [String]
    hobbies: [String]
    
    profile_image: String
    address: String
  }
`;
