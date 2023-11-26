/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlood = /* GraphQL */ `
  query GetBlood($id: ID!) {
    getBlood(id: $id) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlood = /* GraphQL */ `
  query ListBlood(
    $filter: ModelBloodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlood(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bloodType
        units
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDonationRequest = /* GraphQL */ `
  query GetDonationRequest($id: ID!) {
    getDonationRequest(id: $id) {
      id
      requesterName
      bloodType
      age
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDonationRequests = /* GraphQL */ `
  query ListDonationRequests(
    $filter: ModelDonationRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonationRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        requesterName
        bloodType
        age
        weight
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBloodRequest = /* GraphQL */ `
  query GetBloodRequest($id: ID!) {
    getBloodRequest(id: $id) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBloodRequests = /* GraphQL */ `
  query ListBloodRequests(
    $filter: ModelBloodRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBloodRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        requesterName
        bloodType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;


