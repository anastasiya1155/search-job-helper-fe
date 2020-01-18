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
            laptopProvided
            stack
            additionalBonuses
            comments
        }
    }
`;
