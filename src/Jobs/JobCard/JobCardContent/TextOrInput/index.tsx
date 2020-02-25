/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ExecutionResult } from 'graphql';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';

type Props = {
  textProps?: object;
  text: any;
  name: string;
  fieldName: string;
  EditComponent: React.ElementType;
  editProps?: object;
  onSubmit: (name: string, value: string) => Promise<ExecutionResult<any>>;
};

const TextOrInput = ({
  textProps,
  text,
  EditComponent,
  editProps,
  name,
  onSubmit,
  fieldName,
}: Props) => {
  const [isEdit, setEdit] = React.useState(false);
  const [value, setValue] = React.useState(text);
  const classes = useStyles();
  const handleCancelEdit = () => {
    setValue(text);
    setEdit(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(fieldName, value).then(() => setEdit(false));
  };
  return (
    <Typography {...textProps}>
      {name}:{' '}
      {isEdit ? (
        <span>
          <EditComponent {...editProps} value={value} onChange={handleChange} />
          <CheckIcon className={classes.confirmIcons} onClick={handleSubmit} />
        </span>
      ) : (
        text
      )}
      {isEdit ? (
        <CloseIcon className={classes.confirmIcons} onClick={handleCancelEdit} />
      ) : (
        <EditIcon className={classes.pencil} onClick={() => setEdit(true)} />
      )}
    </Typography>
  );
};

export default TextOrInput;
