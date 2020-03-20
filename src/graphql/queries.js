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
      salaryAsk
      salaryOffer
      timeToOffice
      offer
      testTask
      interviewsCount
      interviews {
        id
      }
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
        salaryAsk
        salaryOffer
        timeToOffice
        offer
        testTask
        interviewsCount
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
      salaryAsk
      salaryOffer
      timeToOffice
      offer
      testTask
      interviewsCount
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

export const GET_ALL_NOTES = gql`
  query getAllNotes {
    getAllNotes {
      id
      title
      text
      frequency
    }
  }
`;

export const CREATE_NOTE = gql`
  mutation createNote($input: NoteInput) {
    createNote(input: $input) {
      id
      title
      text
      frequency
    }
  }
`;

export const EDIT_NOTE = gql`
  mutation editNote($id: ID!, $input: NoteInput!) {
    note(id: $id) {
      edit(input: $input) {
        id
        title
        text
        frequency
      }
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($id: ID!) {
    note(id: $id) {
      remove {
        id
      }
    }
  }
`;
