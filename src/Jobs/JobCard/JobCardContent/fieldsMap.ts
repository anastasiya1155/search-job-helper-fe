import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default [
  {
    fieldName: 'remoteOption',
    name: 'Remote Option',
    type: 'boolean',
    editProps: {},
    editComponent: Checkbox,
  },
  { fieldName: 'team', name: 'Team', type: 'string', editProps: {}, editComponent: TextField },
  { fieldName: 'stack', name: 'Stack', type: 'string', editProps: {}, editComponent: TextField },
  {
    fieldName: 'officeAddress',
    name: 'Office',
    type: 'string',
    editProps: {},
    editComponent: TextField,
  },
  {
    fieldName: 'additionalBonuses',
    name: 'Additional',
    type: 'string',
    editProps: {},
    editComponent: TextField,
  },
  { fieldName: 'source', name: 'Source', type: 'string', editProps: {}, editComponent: TextField },
  {
    fieldName: 'comments',
    name: 'Comments',
    type: 'string',
    editProps: {},
    editComponent: TextField,
  },
  {
    fieldName: 'salaryAsk',
    name: 'Salary I want',
    type: 'number',
    editProps: {},
    editComponent: TextField,
  },
  {
    fieldName: 'salaryOffer',
    name: 'Salary they give',
    type: 'number',
    editProps: {},
    editComponent: TextField,
  },
  {
    fieldName: 'testTask',
    name: 'Test task',
    type: 'string',
    editProps: {},
    editComponent: TextField,
  },
  { fieldName: 'offer', name: 'Offer', type: 'boolean', editProps: {}, editComponent: Checkbox },
  {
    fieldName: 'timeToOffice',
    name: 'Time to office',
    type: 'number',
    editProps: {},
    editComponent: TextField,
  },
  {
    fieldName: 'interviewsCount',
    name: 'Interviews count',
    type: 'number',
    editProps: {},
    editComponent: TextField,
  },
];
