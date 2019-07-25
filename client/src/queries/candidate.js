import { gql } from "apollo-boost";

export const CandidateQuery = gql`
  query getCandidates {
    candidates {
      id
      name
      photo
      party
      state
      current_office
      latest_poll
      latest_odds
      bio_qualifications {
        id
        name
        summary
      }
      bio_policy_position {
        id
        name
        summary
      }
      __typename
    }
  }
`;

export const UserVoteMutation = gql`
  mutation createUserVote($candidateId: ID, $userId: ID, $voteType: VoteType) {
    createUserVote(
      candidateId: $candidateId
      userId: $userId
      voteType: $voteType
    ) {
      id
      vote_type
      time
      latest
    }
  }
`;

export const PositionLikeMutation = gql`
  mutation createUserPositionLike(
    $positionId: ID
    $userId: ID
    $like: LikeType
  ) {
    createUserPositionLike(
      candidate_positionId: $positionId
      userId: $userId
      like: $like
    ) {
      id
      like
      time
      latest
    }
  }
`;

export const QualificationLikeMutation = gql`
  mutation createUserQualificationLike(
    $qualificationId: ID
    $userId: ID
    $like: LikeType
  ) {
    createUserQualificationLike(
      qualificationId: $qualificationId
      userId: $userId
      like: $like
    ) {
      id
      like
      time
      latest
    }
  }
`;
