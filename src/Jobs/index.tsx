import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { CREATE_JOB, GET_ALL_JOBS } from 'graphql/queries';
import { JobType } from 'types';
import JobCard from './JobCard';
import useStyles from './useStyles';
import NewJobCard from './NewJobCard';

const Jobs: React.FC = () => {
  const [isNewAdded, setNewAdded] = React.useState(false);
  const [jobs, setJobs] = React.useState<JobType[]>([]);
  const { data, loading } = useQuery(GET_ALL_JOBS);
  const [create] = useMutation(CREATE_JOB);
  const classes = useStyles();

  React.useEffect(() => {
    if (data && data.getAllJobs) {
      setJobs(data.getAllJobs);
    }
  }, [data]);

  const handleNew = () => {
    setNewAdded(true);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleNew}>
        <AddIcon />
      </Fab>
      <div className={classes.jobsContainer}>
        {isNewAdded ? (
          <NewJobCard
            onCancel={() => setNewAdded(false)}
            onSubmit={vals =>
              create({
                variables: { input: vals },
                refetchQueries: ['getAllJobs'],
              }).then(() => setNewAdded(false))
            }
          />
        ) : null}
        {jobs.map((job: JobType) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
