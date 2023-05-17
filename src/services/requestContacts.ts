import { getTimeContact } from 'helpers/getTimeWork';
import { Contact } from 'interfaces/contact';
import { SetStateAction } from 'react';

export const requestContacts = async (
  url: string,
  setIndividuals: { (value: SetStateAction<Contact>): void },
  setSupport: { (value: SetStateAction<Contact>): void }
): Promise<void> => {
  try {
    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      const [individuals, support] = data;
      individuals.operationModes = getTimeContact(individuals);
      support.operationModes = getTimeContact(support);
      setIndividuals(individuals);
      setSupport(support);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
