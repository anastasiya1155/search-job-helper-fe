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
  type: string;
  noName?: boolean;
};

const TextOrInput = ({
  textProps,
  text,
  EditComponent,
  editProps,
  name,
  onSubmit,
  fieldName,
  type,
  noName,
}: Props) => {
  const [isEdit, setEdit] = React.useState(false);
  const [value, setValue] = React.useState(text);
  const classes = useStyles();
  const handleCancelEdit = () => {
    setValue(text);
    setEdit(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(type === 'boolean' ? e.target.checked : e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(fieldName, value).then(() => setEdit(false));
  };
  let displayValue = <Typography {...textProps}>{text}</Typography>;
  if (type === 'boolean') {
    displayValue = text ? <CheckIcon /> : <CloseIcon />;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {!noName && (
        <Typography {...textProps} style={{ flexShrink: 0 }}>
          {name}:{' '}
        </Typography>
      )}
      {isEdit ? (
        <>
          <EditComponent {...editProps} value={value} checked={value} onChange={handleChange} />
          <CheckIcon className={classes.confirmIcons} onClick={handleSubmit} />
        </>
      ) : (
        displayValue
      )}
      {isEdit ? (
        <CloseIcon className={classes.confirmIcons} onClick={handleCancelEdit} />
      ) : (
        <EditIcon className={classes.pencil} onClick={() => setEdit(true)} />
      )}
    </div>
  );
};

export default TextOrInput;
