/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlood = /* GraphQL */ `
  mutation CreateBlood(
    $input: CreateBloodInput!
    $condition: ModelBloodConditionInput
  ) {
    createBlood(input: $input, condition: $condition) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBlood = /* GraphQL */ `
  mutation UpdateBlood(
    $input: UpdateBloodInput!
    $condition: ModelBloodConditionInput
  ) {
    updateBlood(input: $input, condition: $condition) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBlood = /* GraphQL */ `
  mutation DeleteBlood(
    $input: DeleteBloodInput!
    $condition: ModelBloodConditionInput
  ) {
    deleteBlood(input: $input, condition: $condition) {
      id
      bloodType
      units
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDonationRequest = /* GraphQL */ `
  mutation CreateDonationRequest(
    $input: CreateDonationRequestInput!
    $condition: ModelDonationRequestConditionInput
  ) {
    createDonationRequest(input: $input, condition: $condition) {
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
export const updateDonationRequest = /* GraphQL */ `
  mutation UpdateDonationRequest(
    $input: UpdateDonationRequestInput!
    $condition: ModelDonationRequestConditionInput
  ) {
    updateDonationRequest(input: $input, condition: $condition) {
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
export const deleteDonationRequest = /* GraphQL */ `
  mutation DeleteDonationRequest(
    $input: DeleteDonationRequestInput!
    $condition: ModelDonationRequestConditionInput
  ) {
    deleteDonationRequest(input: $input, condition: $condition) {
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
export const createBloodRequest = /* GraphQL */ `
  mutation CreateBloodRequest(
    $input: CreateBloodRequestInput!
    $condition: ModelBloodRequestConditionInput
  ) {
    createBloodRequest(input: $input, condition: $condition) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBloodRequest = /* GraphQL */ `
  mutation UpdateBloodRequest(
    $input: UpdateBloodRequestInput!
    $condition: ModelBloodRequestConditionInput
  ) {
    updateBloodRequest(input: $input, condition: $condition) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBloodRequest = /* GraphQL */ `
  mutation DeleteBloodRequest(
    $input: DeleteBloodRequestInput!
    $condition: ModelBloodRequestConditionInput
  ) {
    deleteBloodRequest(input: $input, condition: $condition) {
      id
      requesterName
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
