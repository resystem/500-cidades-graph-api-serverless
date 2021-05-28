export default `
  type Address {
    id: ID
    state: String
    city: String
    country: String
    street: String
    number: String
    district: String
    zipcode: String
    complement: String
    geolocation: JSON
    lat: Float
    lng: Float
  }

  input AddressInput {
    id: ID
    state: String
    city: String
    country: String
    street: String
    number: String
    district: String
    complement: String
    zipcode: String
    geolocation: JSON
    lat: Float
    lng: Float
  }
`;
