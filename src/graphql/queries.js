import { gql } from 'apollo-boost';

export const GET_ALL_JOBS = gql`
  query getAllJobs {
    getAllJobs {
      id
      name
      source
      position
      link
      remoteOption
      team
      officeAddress
      laptopProvided
      stack
      additionalBonuses
      comments
      interested
      active
    }
  }
`;

export const EDIT_JOB = gql`
  mutation editJob($id: ID!, $input: JobInput!) {
    job(id: $id) {
      edit(input: $input) {
        id
        name
        source
        position
        link
        remoteOption
        team
        officeAddress
        laptopProvided
        stack
        additionalBonuses
        comments
        interested
        active
      }
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob($input: JobInput!) {
    createJob(input: $input) {
      id
      name
      source
      position
      link
      remoteOption
      team
      officeAddress
      laptopProvided
      stack
      additionalBonuses
      comments
      interested
      active
    }
  }
`;

export const REMOVE_JOB = gql`
  mutation removeJob($id: ID!) {
    job(id: $id) {
      remove {
        id
      }
    }
  }
`;

export const GET_ALL_INTERVIEWS = gql`
  query getAllInterviews {
    getAllInterviews {
      id
      startTime
      endTime
      location
      type
      jobId
      job {
        id
        name
      }
      comments
    }
  }
`;

export const CREATE_INTERVIEW = gql`
  mutation createInterview($input: InterviewInput) {
    createInterview(input: $input) {
      id
      startTime
      endTime
      location
      type
      jobId
      job {
        id
        name
      }
      comments
    }
  }
`;

export const EDIT_INTERVIEW = gql`
  mutation editInterview($id: ID!, $input: InterviewInput!) {
    interview(id: $id) {
      edit(input: $input) {
        id
        startTime
        endTime
        location
        type
        jobId
        job {
          id
          name
        }
        comments
      }
    }
  }
`;

export const REMOVE_INTERVIEW = gql`
  mutation removeInterview($id: ID!) {
    interview(id: $id) {
      remove {
        id
      }
    }
  }
`;
