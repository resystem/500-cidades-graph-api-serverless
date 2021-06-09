export default `
  type Asset {
    id: ID
    data: JSON
    type: String
  }

  input AssetInput {
    id: ID
    data: JSON
    type: String
  }
`;
