import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import { Size } from 'interfaces/common/componentsSettings';

export const STATUS_ICONS = {
  success: <CheckCircleOutlineOutlinedIcon fontSize={Size.SMALL} color="success" />,
  error: <ReportProblemOutlinedIcon fontSize={Size.SMALL} color="error" />,
};
