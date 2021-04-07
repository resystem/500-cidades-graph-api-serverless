// type  { location: Address interests: [Subscriptions] images: [Image] videos: [Videos] }
export default `
  type Entity {
    id: String
    name: String
    type: String
    email: String

    owner: User
  
    biografy: String
    link: String
    phone: String
    facebook: String
    instagram: String
    twitter: String
    tik_tok: String
    web_site: String
    price_range: String
  
    roles: [String]
    caracteristics: [String]
  
    birth_date: String
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
    name: String
    type: String
    email: String

    owner: String
  
    biografy: String
    link: String
    phone: String
    facebook: String
    instagram: String
    twitter: String
    tik_tok: String
    web_site: String
    price_range: String
  
    roles: [String]
    caracteristics: [String]
  
    birth_date: String
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
