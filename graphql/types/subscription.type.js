export default `
  type Subscription {
    id: String
    user: User
    is_aproved: Boolean
    is_blocked: Boolean
    role: String
    entity: Entity
  }

  input SubscriptionInput {
    id: String
    user: User
    is_aproved: Boolean
    is_blocked: Boolean
    role: String
    entity: Entity
  }
`;