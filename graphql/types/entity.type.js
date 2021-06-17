// type  { location: Address interests: [Subscriptions] images: [Image] videos: [Videos] }
export default `
  type Entity {
    id: String
    biografy: String
    birth_date: String
    email: String
    occupation: String
    phone: String
    whatsapp: String
    name: String
    
    
    fields_interest: [String]
    how_to_collaborate: [String]
    
    has_address: Boolean
    is_host_point: Boolean
    
    facebook: String
    instagram: String
    tik_tok: String
    twitter: String
    web_site: String

    type: String
    category: String
    
    
    owner: User
    profile_image: Image
    address: Address
    
    
    roles: [String]    
    link: String
    price_range: String
    caracteristics: [String]
    open_at_mon: String
    open_at_tue: String
    open_at_wed: String
    open_at_thu: String
    open_at_fry: String
    open_at_sat: String
    open_at_sun: String
    closed_at_mon: String
    closed_at_tue: String
    closed_at_wed: String
    closed_at_thu: String
    closed_at_fry: String
    closed_at_sat: String
    closed_at_sun: String

    ticket_office: Boolean
    has_accommodation: Boolean
    has_accessibility: Boolean

    capacity: Int
    qtt_rooms: Int
  }

  input EntityInput {
    id: String
    biografy: String
    birth_date: String
    email: String
    occupation: String
    phone: String
    whatsapp: String
    name: String
    
    
    fields_interest: [String]
    how_to_collaborate: [String]
    
    has_address: Boolean
    is_host_point: Boolean
    
    facebook: String
    instagram: String
    tik_tok: String
    twitter: String
    web_site: String

    type: String
    category: String
    
    
    owner: String
    profile_image: String
    address: String
    
    roles: [String]    
    link: String
    price_range: String
    caracteristics: [String]
    open_at_mon: String
    open_at_tue: String
    open_at_wed: String
    open_at_thu: String
    open_at_fry: String
    open_at_sat: String
    open_at_sun: String
    closed_at_mon: String
    closed_at_tue: String
    closed_at_wed: String
    closed_at_thu: String
    closed_at_fry: String
    closed_at_sat: String
    closed_at_sun: String

    ticket_office: Boolean
    has_accommodation: Boolean
    has_accessibility: Boolean

    capacity: Int
    qtt_rooms: Int
  }
`;
