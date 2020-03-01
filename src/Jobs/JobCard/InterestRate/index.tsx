import React from 'react';
import Slider from '@material-ui/core/Slider';

type Props = {
  rate: number;
  onChange: (val: number) => void;
  isGrey?: boolean;
};

const colors = [
  '#4f0000',
  '#810000',
  '#c90803',
  '#ba4200',
  '#e05e01',
  '#e1a700',
  '#e0d700',
  '#b5e000',
  '#57e20e',
  '#13c20b',
  '#00c400',
];

const InterestRate = ({ rate, onChange, isGrey }: Props) => {
  const [value, setValue] = React.useState<number>(rate);
  return (
    <div>
      <Slider
        style={{ color: isGrey ? '#5b5b5b' : colors[value] }}
        value={value}
        onChange={(e, val) => setValue(val as number)}
        onChangeCommitted={(e, val) => {
          if (val && typeof val === 'number') {
            onChange(val);
          }
        }}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
    </div>
  );
};

export default InterestRate;
