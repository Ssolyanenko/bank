export interface Contact {
  name: string;
  description: string;
  localPhone: string;
  internationalPhone: string;
  operationModes: {
    dayOfWeek: string;
    openingTime: string;
    closingTime: string;
  }[];
}
