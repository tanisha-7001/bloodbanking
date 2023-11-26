/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlood = /* GraphQL */ `
  subscription OnCreateBlood($filter: ModelSubscriptionBloodFilterInput) {
    onCreateBlood(filter: $filter) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBlood = /* GraphQL */ `
  subscription OnUpdateBlood($filter: ModelSubscriptionBloodFilterInput) {
    onUpdateBlood(filter: $filter) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBlood = /* GraphQL */ `
  subscription OnDeleteBlood($filter: ModelSubscriptionBloodFilterInput) {
    onDeleteBlood(filter: $filter) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDonationRequest = /* GraphQL */ `
  subscription OnCreateDonationRequest(
    $filter: ModelSubscriptionDonationRequestFilterInput
  ) {
    onCreateDonationRequest(filter: $filter) {
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
export const onUpdateDonationRequest = /* GraphQL */ `
  subscription OnUpdateDonationRequest(
    $filter: ModelSubscriptionDonationRequestFilterInput
  ) {
    onUpdateDonationRequest(filter: $filter) {
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
export const onDeleteDonationRequest = /* GraphQL */ `
  subscription OnDeleteDonationRequest(
    $filter: ModelSubscriptionDonationRequestFilterInput
  ) {
    onDeleteDonationRequest(filter: $filter) {
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
export const onCreateBloodRequest = /* GraphQL */ `
  subscription OnCreateBloodRequest(
    $filter: ModelSubscriptionBloodRequestFilterInput
  ) {
    onCreateBloodRequest(filter: $filter) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBloodRequest = /* GraphQL */ `
  subscription OnUpdateBloodRequest(
    $filter: ModelSubscriptionBloodRequestFilterInput
  ) {
    onUpdateBloodRequest(filter: $filter) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBloodRequest = /* GraphQL */ `
  subscription OnDeleteBloodRequest(
    $filter: ModelSubscriptionBloodRequestFilterInput
  ) {
    onDeleteBloodRequest(filter: $filter) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
