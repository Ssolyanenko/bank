import { FC, ChangeEvent } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { RadioButtonsInfo } from 'interfaces/creditCardPremium';
import colors from 'styles/variables.module.scss';
import classes from './RadioButtonsGroup.module.scss';

interface Props {
  radioGroupArray: RadioButtonsInfo[];
  name: string;
  onChange(value: string): void;
  defaultChecked?: string;
  isModalChooseCard?: boolean;
  selectedValue?: string;
}

export const RadioButtonsGroup: FC<Props> = ({
  radioGroupArray,
  name,
  onChange,
  defaultChecked,
  isModalChooseCard = false,
  selectedValue,
}) => {
  const sxStyles = isModalChooseCard ? { flexDirection: 'row', flexWrap: 'nowrap' } : {};
  const radioGroupClass = isModalChooseCard ? 'modalChooseCard' : '';

  return (
    <RadioGroup
      name={name}
      onChange={(event: ChangeEvent, value: string): void => {
        onChange(value);
      }}
      defaultValue={defaultChecked}
      className={`${classes[radioGroupClass]}`}
      sx={sxStyles}
      value={selectedValue}
    >
      {radioGroupArray.map(({ id, value, label }) => (
        <FormControlLabel
          key={id}
          value={value}
          label={label}
          control={<Radio className={classes.radioButton} sx={{ '&.Mui-checked': { color: colors.orange } }} />}
        />
      ))}
    </RadioGroup>
  );
};
