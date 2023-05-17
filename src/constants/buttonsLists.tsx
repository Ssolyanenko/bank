import { ButtonsListItem } from 'interfaces/buttonsListItem';
import { SocialMediaNames } from 'constants/text';
import {
  DownloadIcon,
  MailIcon,
  ShareIcon,
  VisibilityIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  SkypeIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from 'assets';

export const cardStatementButtonsItems: ButtonsListItem[] = [
  { icon: <VisibilityIcon />, name: 'buttonNames.showStatement', type: 'visibility' },
  { icon: <DownloadIcon />, name: 'buttonNames.downloadStatement', type: 'download' },
  { icon: <MailIcon />, name: 'buttonNames.sendToEmail', type: 'mail' },
  { icon: <ShareIcon />, name: 'buttonNames.shareStatement', type: 'share' },
];

export const receipButtonsItems: ButtonsListItem[] = [
  { icon: <VisibilityIcon />, name: 'buttonNames.showReceipt', type: 'visibility' },
  { icon: <DownloadIcon />, name: 'buttonNames.downloadReceipt', type: 'download' },
  { icon: <MailIcon />, name: 'buttonNames.sendToEmail', type: 'mail' },
  { icon: <ShareIcon />, name: 'buttonNames.shareReceipt', type: 'share' },
];

export const socialMediaItems: ButtonsListItem[] = [
  { icon: <InstagramIcon />, name: SocialMediaNames.INSTAGRAM, type: 'instagram' },
  { icon: <FacebookIcon />, name: SocialMediaNames.FACEBOOK, type: 'facebook' },
  { icon: <SkypeIcon />, name: SocialMediaNames.SKYPE, type: 'skype' },
  { icon: <WhatsAppIcon />, name: SocialMediaNames.WHATSAPP, type: 'whatsApp' },
  { icon: <TwitterIcon />, name: SocialMediaNames.TWITTER, type: 'twitter' },
  { icon: <LinkedInIcon />, name: SocialMediaNames.LINKEDIN, type: 'linkedIn' },
  { icon: <EmailIcon />, name: SocialMediaNames.EMAIL, type: 'email' },
  { icon: <TelegramIcon />, name: SocialMediaNames.TELEGRAM, type: 'telegram' },
];
