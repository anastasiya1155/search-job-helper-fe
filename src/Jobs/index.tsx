import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { GET_ALL_JOBS } from 'graphql/queries';
import { JobType } from 'types';
import JobCard from './JobCard';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = React.useState<JobType[]>([]);
  const { data, loading } = useQuery(GET_ALL_JOBS);

  React.useEffect(() => {
    if (data && data.getAllJobs) {
      setJobs(data.getAllJobs);
    }
  }, [data]);

  const handleNew = () => {
    setJobs([
      {
        name: '',
        additionalBonuses: '',
        comments: '',
        link: '',
        officeAddress: '',
        id: '',
        position: '',
        remoteOption: false,
        source: '',
        stack: '',
        team: '',
      },
      ...jobs,
    ]);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleNew}>
        <AddIcon />
      </Fab>
      {jobs.map((job: JobType) => (
        <JobCard job={job} />
      ))}
    </div>
  );
};

export default Jobs;
