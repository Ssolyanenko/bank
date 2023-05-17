import colors from 'styles/variables.module.scss';

export const BASIC_INPUT_STYLES = {
  width: '100%',
  border: `1px solid ${colors.grayLight_10}`,
  borderRadius: 2,
  color: `${colors.grayDark_6}`,
  '&.Mui-error': {
    borderColor: `${colors.error_1}`,
  },
  '.MuiInputBase-input': {
    fontSize: '1rem',
    padding: '12px 11px 11px',
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
  },
};

export const BASIC_SELECT_STYLES = {
  ...BASIC_INPUT_STYLES,
  '.MuiInputBase-input': {
    padding: '7px 32px 7px 12px',
  },
};
