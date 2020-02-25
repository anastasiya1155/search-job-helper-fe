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
