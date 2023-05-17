import { CardApplicationClasses, СardApplicationStatusses } from 'interfaces/cardApplications';

export const cardApplicationStatusClasses = (status: СardApplicationStatusses): CardApplicationClasses => {
  switch (status) {
    case 'Under consideration':
      return CardApplicationClasses.PURPLE_STATUS;
    case 'Approved':
    case 'In progress':
      return CardApplicationClasses.YELLOW_STATUS;
    case 'On the way':
    case 'Ready for pick up':
      return CardApplicationClasses.BLUE_STATUS;
    case 'Rejected':
    case 'Cancelled automatically':
      return CardApplicationClasses.RED_STATUS;
    default:
      return CardApplicationClasses.GREEN_STATUS;
  }
};
