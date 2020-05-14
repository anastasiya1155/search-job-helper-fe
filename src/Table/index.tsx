import React from 'react';
import Table from 'material-table';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_JOBS } from 'graphql/queries';

const TableCompare = () => {
  const { data, loading } = useQuery(GET_ALL_JOBS);
  const tableData = data && data.getAllJobs ? data.getAllJobs : [];
  return (
    <div>
      <Table
        title="My vacancies"
        columns={[
          { field: 'name', title: 'Name' },
          { field: 'interested', title: 'Interest' },
          { field: 'offer', title: 'Offer', type: 'boolean' },
          { field: 'salaryAsk', title: 'Salary I want' },
          { field: 'salaryOffer', title: 'Salary they give' },
          { field: 'team', title: 'Team' },
          { field: 'stack', title: 'Stack' },
          { field: 'officeAddress', title: 'Address' },
          { field: 'timeToOffice', title: 'Time To Office' },
          { field: 'remote', title: 'Work From Home', type: 'boolean' },
          { field: 'additionalBonuses', title: 'Addition Bonuses' },
          { field: 'comments', title: 'Comments' },
        ]}
        data={tableData}
        isLoading={loading}
        options={{
          paging: false,
          loadingType: 'linear',
          columnsButton: true,
          search: false,
          exportButton: true,
        }}
      />
    </div>
  );
};

export default TableCompare;
