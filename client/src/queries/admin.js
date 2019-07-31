import { gql } from "apollo-boost";

export const AdminTotalUsers = gql`
  {
    users {
      id
      name
      email
      gender
    }
  }
`;

export const AdminTotalAttributes = gql`
  {
    voteAttributes {
      prevotes
      topCount
      favoriteCount
      compromiseCount
      vetoCount
      average_top
      average_favorite
      average_compromise
      average_veto
    }
  }
`;

export const AdminCandidatesQuery = gql`
  {
    candidatesWithVotes {
      candidate {
        id
        name
        party
        state
        current_office
        age
      }
      tops
      favorites
      compromises
      vetos
    }
  }
`;

export const AdminPositionsQuery = gql`
  {
    positionsWithLikes {
      position {
        id
        name
        topic {
          id
          name
          category
        }
      }
      likes
      dislikes
    }
  }
`;

export const AdminAddCandidate = gql`
  mutation createCandidate($data: CandidateCreateInput!) {
    createCandidate(data: $data) {
      id
      name
      party
      state
      current_office
      age
    }
  }
`;

export const AdminUpdateCandidate = gql`
  mutation updateCandidate(
    $data: CandidateUpdateInput!
    $where: CandidateWhereUniqueInput!
  ) {
    updateCandidate(data: $data, where: $where) {
      id
    }
  }
`;

export const AdminDeleteCandidate = gql`
  mutation deleteCandidate($where: CandidateWhereUniqueInput!) {
    deleteCandidate(where: $where) {
      id
    }
  }
`;

export const AdminAddPosition = gql`
  mutation createPosition($data: PositionCreateInput!) {
    createPosition(data: $data) {
      id
      name
      summary
      topic {
        id
        name
        category
      }
      detail
    }
  }
`;

export const AdminDeletePosition = gql`
  mutation deletePosition($where: PositionWhereUniqueInput!) {
    deletePosition(where: $where) {
      id
    }
  }
`;

export const AdminUpdatePosition = gql`
  mutation updatePosition(
    $data: PositionUpdateInput!
    $where: PositionWhereUniqueInput!
  ) {
    updatePosition(data: $data, where: $where) {
      id
    }
  }
`;

export const AdminTopicsQuery = gql`
  {
    topics {
      id
      name
      category
    }
  }
`;
