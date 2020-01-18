import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_JOBS } from '../graphql/queries';
import { JobType } from '../types';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = React.useState([]);
  const { data, loading } = useQuery(GET_ALL_JOBS);

  React.useEffect(() => {
    if (data && data.getAllJobs) {
      setJobs(data.getAllJobs);
    }
  }, [data]);

  return loading ? <p>Loading...</p> : (
    <div>
      {jobs.map((job: JobType) => (
        <div>{job.name}</div>
      ))}
    </div>
  );
};

export default Jobs;
