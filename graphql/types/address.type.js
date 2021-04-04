export default `
  type Address {
    id: ID
    state: String,
    city: String,
    country: String,
    street: String,
    number: String,
    district: String,
    zipcode: String,
    geolocation: JSON,
  }

  input AddressInput {
    id: ID
    state: String,
    city: String,
    country: String,
    street: String,
    number: String,
    district: String,
    zipcode: String,
    geolocation: JSON,
  }
`;
