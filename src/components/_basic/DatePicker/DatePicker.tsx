import { FC, ReactElement } from 'react';
import { Box, TextFieldProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SxProps } from '@mui/system';

import colors from 'styles/variables.module.scss';
import classes from './DatePicker.module.scss';

interface Props {
  date: Date | null;
  setDate(date: Date | null, keyboardInputValue?: string): void;
  label: string;
  minDate?: Date | null;
  maxDate?: Date | null;
}

export const DatePicker: FC<Props> = ({ date, setDate, label, minDate, maxDate }) => {
  const popperSx: SxProps = {
    '& .MuiCalendarPicker-root': { maxHeight: '340px', overflow: 'hidden', padding: '15px 20px 29px 37px' },
    '& .MuiPickersCalendarHeader-root': { marginLeft: '0px', paddingLeft: '0' },
    '& .MuiYearPicker-root': { maxWidth: '340px', maxHeight: '260px', padding: '0 4px 0 7px' },
    '& .PrivatePickersYear-yearButton': { width: '52px', height: '28px', margin: '7px 0' },
    '& .MuiButtonBase-root.MuiPickersDay-root': { margin: '0' },
    '& .PrivatePickersYear-yearButton.Mui-selected:focus, & .PrivatePickersYear-yearButton:hover, & .MuiButtonBase-root.MuiPickersDay-root.Mui-selected, & .MuiPickersDay-dayWithMargin:hover,  & .MuiTypography-root.PrivatePickersMonth-root.Mui-selected':
      { backgroundColor: colors.orange, color: colors.grayDark_6 },
  };

  const handleChange = (newDate: Date | null): void => {
    if (newDate) setDate(new Date(newDate));
  };

  const textFieldSx: SxProps = {
    '& .MuiOutlinedInput-root': { width: 192 },
    '& .MuiOutlinedInput-root:hover, & .MuiOutlinedInput-root.Mui-focused': {
      '& fieldset': { border: `2px solid ${colors.orange}` },
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="label" className={classes.dateLabel}>
        {label}
        <DesktopDatePicker
          components={{
            OpenPickerIcon: CalendarTodayOutlinedIcon,
          }}
          PopperProps={{ sx: popperSx }}
          inputFormat="DD.MM.YYYY"
          minDate={minDate as Date}
          maxDate={maxDate ?? new Date()}
          value={date}
          onChange={handleChange}
          renderInput={(params: TextFieldProps): ReactElement => <TextField {...params} sx={textFieldSx} />}
          InputProps={{
            sx: {
              height: 48,
              pr: 2,
              '& .MuiButtonBase-root': { color: colors.grayDark_6 },
              '& .MuiButtonBase-root:hover': { backgroundColor: colors.orange },
              '& .MuiButtonBase-root-MuiPickersDay-root:selected': { backgroundColor: colors.orange },
            },
          }}
          views={['year', 'day']}
          showDaysOutsideCurrentMonth
        />
      </Box>
    </LocalizationProvider>
  );
};
