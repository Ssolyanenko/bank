import {
  PayIcon,
  TopOnIcon,
  DollarIcon,
  GetIcon,
  TopOnWithoutCardIcon,
  WeekendIcon,
  OpenNowIcon,
  ClockIcon,
  RampIcon,
  ExoticCurrencyIcon,
  ConsultationIcon,
  InsuranceIcon,
  TransferToCardIcon,
} from 'assets';
import colors from 'styles/variables.module.scss';

export const POPULAR_BUTTONS = [
  { icon: <TransferToCardIcon color={colors.grayDark_6} />, text: 'Transfer' },
  { icon: <PayIcon />, text: 'Payments' },
  { icon: <TopOnIcon />, text: 'Top up' },
  { icon: <DollarIcon iconsColor="black" size="24px" />, text: 'Currency exchange' },
  { icon: <GetIcon />, text: 'Withdraw cash' },
  { icon: <TopOnWithoutCardIcon />, text: 'Top up without card' },
];

export const WORK_BUTTONS = [
  { icon: <WeekendIcon />, text: 'Weekends' },
  { icon: <OpenNowIcon />, text: 'Open now' },
  { icon: <ClockIcon />, text: '24/7' },
];

export const EXTRA_BUTTONS = [
  { icon: <RampIcon />, text: 'Pandus' },
  { icon: <ExoticCurrencyIcon />, text: 'Exotic currency exchange' },
  { icon: <ConsultationIcon />, text: 'Consultation' },
  { icon: <InsuranceIcon />, text: 'Insurance' },
];

export const INITIAL_HIGHTLIGHT_BUTTONS = [
  { text: 'Transfer', isActive: false },
  { text: 'Payments', isActive: false },
  { text: 'Top up', isActive: false },
  { text: 'Currency exchange', isActive: false },
  { text: 'Withdraw cash', isActive: false },
  { text: 'Top up without card', isActive: false },
  { text: 'Weekends', isActive: false },
  { text: 'Open now', isActive: false },
  { text: '24/7', isActive: false },
  { text: 'Pandus', isActive: false },
  { text: 'Exotic currency exchange', isActive: false },
  { text: 'Consultation', isActive: false },
  { text: 'Insurance', isActive: false },
];
